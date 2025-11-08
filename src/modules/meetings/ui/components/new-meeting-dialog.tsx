import { ResponsiveDialog } from "@/components/responsive-dialog";

interface NewMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewMeetingDialog: React.FC<NewMeetingDialogProps> = ({ open, onOpenChange }) => {
  return (
    <ResponsiveDialog
      title="New Agent"
      description="Create a new agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      <div>Agent Form Placeholder</div>
    </ResponsiveDialog>
  );
};

export default NewMeetingDialog;
