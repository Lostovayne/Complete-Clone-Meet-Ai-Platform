import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentGetOne } from "../../types";
import { AgentForm } from "./agent-form";

interface UpdateAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: AgentGetOne;
}

const UpdateAgentDialog: React.FC<UpdateAgentDialogProps> = ({ open, onOpenChange, initialValues }) => {
  return (
    <ResponsiveDialog
      title="Edit Agent"
      description="Edit the details of your agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        initialValues={initialValues}
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
};

export default UpdateAgentDialog;
