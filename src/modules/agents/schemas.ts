import { z } from "zod";

export const agentInsertSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  instructions: z.string().min(1, { message: "Instructions are required" }),
});

export const agentsUpdateSchema = agentInsertSchema.extend({
  id: z.string().min(1, { message: "ID is required" }),
});
