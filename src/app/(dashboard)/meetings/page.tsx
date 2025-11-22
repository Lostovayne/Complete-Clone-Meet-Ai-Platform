import { auth } from "@/lib/auth";
import MeetingsListHeader from "@/modules/meetings/ui/components/meetings-list-header";
import {
  MeetingsView,
  MeetingsViewError,
  MeetingsViewLoading,
} from "@/modules/meetings/ui/views/meetings-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const MeetingDataPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) redirect("/sign-in");
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <>
      <MeetingsListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MeetingsView />
      </HydrationBoundary>
    </>
  );
};

const MeetingPage = () => {
  return (
    <Suspense fallback={<MeetingsViewLoading />}>
      <ErrorBoundary fallback={<MeetingsViewError />}>
        <MeetingDataPage />
      </ErrorBoundary>
    </Suspense>
  );
};

export default MeetingPage;
