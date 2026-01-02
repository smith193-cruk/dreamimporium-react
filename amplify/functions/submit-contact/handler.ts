import type { APIGatewayProxyHandler } from "aws-lambda";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { getAmplifyDataClientConfig } from "@aws-amplify/backend/function/runtime";

import type { Schema } from "../../data/resource";

const ses = new SESClient({ region: process.env.AWS_REGION });

const json = (statusCode: number, body: any) => ({
  statusCode,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
  },
  body: JSON.stringify(body),
});

export const handler: APIGatewayProxyHandler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(200, { ok: true });

  try {
    // ✅ Configure Amplify Data client in Lambda (Gen 2 way)
    const { resourceConfig, libraryOptions } = await getAmplifyDataClientConfig(
        process.env as any
    );
    Amplify.configure(resourceConfig, libraryOptions);
    const client = generateClient<Schema>();

    const body = event.body ? JSON.parse(event.body) : {};
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();
    const techniques = (body.techniques ?? "").trim();

    if (!name || !email || !message) {
      return json(400, { ok: false, error: "Missing required fields." });
    }

    // ✅ Save to Data (DynamoDB)
    const created = await client.models.ContactRequest.create({
      name,
      email,
      message,
      techniques: techniques || undefined,
      status: "NEW",
    });

    if (created.errors?.length) {
      return json(500, { ok: false, error: created.errors[0].message });
    }

    // ✅ Send email via SES
    const to = process.env.TO_EMAIL!;
    const from = process.env.FROM_EMAIL!;
    const subject = `New Dream Imporium enquiry from ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      techniques ? `Techniques: ${techniques}` : "",
      "",
      "Message:",
      message,
      "",
      `Record ID: ${created.data?.id ?? "n/a"}`,
    ]
      .filter(Boolean)
      .join("\n");

    await ses.send(
      new SendEmailCommand({
        Destination: { ToAddresses: [to] },
        Source: from,
        Message: {
          Subject: { Data: subject },
          Body: { Text: { Data: text } },
        },
        ReplyToAddresses: [email],
      })
    );

    return json(200, { ok: true, id: created.data?.id });
  } catch (err: any) {
    console.error(err);
    return json(500, { ok: false, error: "Server error" });
  }
};
