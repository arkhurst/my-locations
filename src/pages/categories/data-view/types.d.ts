export interface CardComponentProp {
  category: Category;
}

export interface MainComponentProp {
  categories: Array<Category>;
}

export type Category = {
  name: string;
  id: string;
};
