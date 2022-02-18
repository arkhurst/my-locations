export interface ActionButtonComponentProp {
  icon: string;
  onActionClicked?: () => void;
  tooltipLabel: string;
  disabled?: boolean;
}
