import { useIsMobile } from "@/hooks/use-mobile";

import { Dialog } from "@/components/ui/dialog";

import { Drawer } from "@/components/ui/drawer";
import { ReactNode } from "react";

interface ResponsiveDialogProps {
  title: string;
  description: string;
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ResponsiveDialog = ({
  title,
  description,
  children,
  open,
  onOpenChange,
}: ResponsiveDialogProps) => {
  const isMobile = useIsMobile();

  console.log(title, description, open, isMobile, children);

  if (isMobile) {
    return <Drawer open={open} onOpenChange={onOpenChange}></Drawer>;
  }

  return <Dialog open={open} onOpenChange={onOpenChange}></Dialog>;
};
