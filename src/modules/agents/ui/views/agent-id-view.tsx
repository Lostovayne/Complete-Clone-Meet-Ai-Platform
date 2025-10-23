"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Props {
  agentId: string;
}

export const AgentIdView = ({ agentId }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getOne.queryOptions({ id: agentId }));

  return <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">{JSON.stringify(data)}</div>;
};
