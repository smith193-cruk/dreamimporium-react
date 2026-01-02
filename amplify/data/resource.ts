import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  ContactRequest: a
    .model({
      name: a.string().required(),
      email: a.email().required(),
      message: a.string().required(),
      techniques: a.string(),
      status: a.string().default("NEW"),
    })
    // ✅ Use API-key “public” auth (works when allow.public() is unavailable)
    .authorization((allow) => [
      allow.publicApiKey(),
      // If your version supports narrowing operations you can do:
      // allow.publicApiKey().to(["create"])
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
});
