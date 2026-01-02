import { defineFunction } from "@aws-amplify/backend";

export const submitContact = defineFunction({
  name: "submitContact",
  entry: "./handler.ts",
  environment: {
    // Set these in Amplify console env vars later (recommended),
    // or leave here for dev testing.
    TO_EMAIL: "you@yourdomain.com",
    FROM_EMAIL: "verified-sender@yourdomain.com",
  },
});
