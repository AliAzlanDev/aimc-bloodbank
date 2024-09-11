import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const bloodBankSchema = z.object({
  Name: z.string(),
  "Father Name": z.string(),
  "Roll No": z.string(),
  Gender: z.string(),
  "Blood Group": z.string(),
  Batch: z.string(),
  "Willing To Donate": z.string(),
  "Contact No": z.string(),
  "Last Donation Date": z.string(),
});

export type BloodBank = z.infer<typeof bloodBankSchema>;
