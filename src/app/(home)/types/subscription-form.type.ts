import { type SubscriptionSchema } from "@/app/(home)/schemas";
import { type z } from "zod";

export type SubscriptionFormProps = z.infer<typeof SubscriptionSchema>;
