"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { AgentIdViewHeader } from "./agent-id-view-header";

interface Props {
  agentId: string;
}

export const AgentIdView = ({ agentId }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getOne.queryOptions({ id: agentId }));

  return (
    <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
      <AgentIdViewHeader agentId={agentId} agentName={data.name} onEdit={() => {}} onRemove={() => {}} />
    </div>
  );
};

export const AgentsIdViewLoading = () => {
  return <LoadingState title="Loading Agents" description="This may take a few seconds" />;
};

export const AgentsIdViewError = () => {
  return (
    <ErrorState
      title="Error loading agents"
      description="Something went wrong while loading the agents"
    />
  );
};
