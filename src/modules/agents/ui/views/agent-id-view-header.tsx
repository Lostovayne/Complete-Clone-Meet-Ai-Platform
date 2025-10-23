interface Props {
  agentId: string;
  agentName: string;
  onEdit: () => void;
  onRemove: () => void;
}

export const AgentIdViewHeader = ({ agentId, agentName, onEdit, onRemove }: Props) => {
  return <div>AgentIdViewHeader</div>;
};
