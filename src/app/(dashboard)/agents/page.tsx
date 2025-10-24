import { auth } from "@/lib/auth";
import { loadSearchParams } from "@/modules/agents/params";
import AgentsListHeader from "@/modules/agents/ui/components/agents-list-header";
import AgentsView, { AgentsViewError, AgentsViewLoading } from "@/modules/agents/ui/views/agents-view";

import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { SearchParams } from "nuqs";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Use a Nuqs load params to fetch agents data
interface Props {
  searchParams: Promise<SearchParams>;
}

const AgentsData = async ({ searchParams }: Props) => {
  const filters = await loadSearchParams(searchParams);
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions({ ...filters }));

  return (
    <>
      <AgentsListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AgentsView />
      </HydrationBoundary>
    </>
  );
};

const AgentsPage = ({ searchParams }: Props) => {
  return (
    <Suspense fallback={<AgentsViewLoading />}>
      <ErrorBoundary FallbackComponent={AgentsViewError}>
        <AgentsData searchParams={searchParams} />
      </ErrorBoundary>
    </Suspense>
  );
};
export default AgentsPage;
