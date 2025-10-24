import { LoadingState } from "@/components/loading-state";
import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import DashboardNavbar from "@/modules/dashboard/ui/components/dashboard-navbar";
import DashboardSidebar from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode, Suspense } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const AuthCheck = async ({ children }: DashboardLayoutProps) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) redirect("/sign-in");
  return <>{children}</>;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <Suspense fallback={<LoadingState title="Loading layout..." description="Please wait a moment" />}>
        <DashboardSidebar />
        <main className="flex flex-col h-screen w-screen bg-muted">
          <DashboardNavbar />
          <Suspense
            fallback={<LoadingState title="Loading Agent..." description="Please wait a moment " />}
          >
            <AuthCheck>{children}</AuthCheck>
          </Suspense>
        </main>
      </Suspense>
    </SidebarProvider>
  );
};
export default DashboardLayout;
