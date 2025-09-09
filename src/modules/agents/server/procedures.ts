import { db } from "@/db";
import { agents } from "@/db/schema";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { agentInsertSchema } from "../schemas";

export const agentsRouter = createTRPCRouter({
  // TODO: Change getOne this to a protected procedure
  getOne: baseProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    const [existingAgent] = await db.select().from(agents).where(eq(agents.id, input.id));
    return existingAgent;
  }),

  // TODO: Change GetMany this to a protected procedure
  getMany: baseProcedure.query(async () => {
    const data = await db.select().from(agents);
    return data;
  }),

  // -> Protected Procedure with input validation Schema
  create: protectedProcedure.input(agentInsertSchema).mutation(async ({ input, ctx }) => {
    const [createdAgent] = await db
      .insert(agents)
      .values({
        ...input,
        userId: ctx.auth.user.id,
      })
      .returning();
    return createdAgent;
  }),
});
