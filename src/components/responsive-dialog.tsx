import { useIsMobile } from "@/hooks/use-mobile";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { ReactNode } from "react";

interface ResponsiveDialogProps { 
  title: string;
  description: string;
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}


export const ResponsiveDialog = ({ title, description, children, open, onOpenChange }:ResponsiveDialogProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        
      </Drawer>
    )
   }

  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>

    </Dialog>
  )
  

}