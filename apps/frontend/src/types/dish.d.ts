export interface Dish {
  id: string;
  name: string;
  price_min: string;
  price_max: string;
  description: string;
  image?: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isSpicy?: boolean;
}
