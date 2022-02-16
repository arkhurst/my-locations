export type BreadCrumbProp = {
  name: string;
  href: string;
};
export interface ToolBarComponentProp {
  pages: BreadCrumbProp[];
  showActions: boolean;
  onAdd?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
}
