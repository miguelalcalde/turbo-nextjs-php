export interface Dish {
  id: string;
  name: string;
  priceRange: string;
  description: string;
  image?: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isSpicy?: boolean;
}
