import { defineBackend } from "@aws-amplify/backend";
import { Stack } from "aws-cdk-lib";
import { Cors, LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";

import { data } from "./data/resource";
import { submitContact } from "./functions/submit-contact/resource";

const backend = defineBackend({
  data,
  submitContact,
});

// Create a new stack for the API
const apiStack = backend.createStack("api-stack");

// Create a REST API
const api = new RestApi(apiStack, "DreamImporiumApi", {
  restApiName: "dreamImporiumApi",
  deploy: true,
  deployOptions: { stageName: "dev" },
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS,
    allowMethods: ["POST", "OPTIONS"],
    allowHeaders: Cors.DEFAULT_HEADERS,
  },
});

// Integrate the Lambda
const integration = new LambdaIntegration(backend.submitContact.resources.lambda);

// Route: POST /contact
const contact = api.root.addResource("contact");
contact.addMethod("POST", integration);