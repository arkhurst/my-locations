export type BreadCrumbProp = {
  name: string;
  href: string;
};
export interface ToolBarComponentProp {
  pages: BreadCrumbProp[];
  onAdd: () => void;
  onEdit: () => void;
  onRemove: () => void;
}
