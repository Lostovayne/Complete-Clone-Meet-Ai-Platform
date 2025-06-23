import { authClient } from "@/lib/auth-client";

import GenerateAvatar from "@/components/generate-avatar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const DashboardUserButton = () => {
  const { isPending, data } = authClient.useSession();

  if (!isPending || !data?.user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
        {data.user.image ? (
          <Avatar>
            <AvatarImage src={data.user.image} alt="Avatar Image" />
          </Avatar>
        ) : (
          <GenerateAvatar seed={data.user.name} variant="initials" className="size-9 mr-3" />
        )}
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default DashboardUserButton;
