import { ResponsiveDialog } from "@/components/responsive-dialog";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewAgentDialog: React.FC<NewAgentDialogProps> = ({ open, onOpenChange }) => {
  return (
    <ResponsiveDialog
      title="New Agent"
      description="Create a new agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      new agent form goes here
    </ResponsiveDialog>
  );
};

export default NewAgentDialog;
