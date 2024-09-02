export interface Restaurant {
  id: string;
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  categories: string[];
  image?: string;
  priceRange?: string;
  rating?: number;
  openingHours?: string;
}
