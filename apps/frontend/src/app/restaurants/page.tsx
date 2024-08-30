import CardRestaurant from "@/components/card-restaurant";

// Sample restaurant data
const restaurants = [
  {
    name: "The Rustic Spoon",
    address: "123 Main St, Toronto, ON M5V 2T6, Canada",
    categories: ["Italian", "Pizza", "Pasta"],
  },
  {
    name: "Sushi Haven",
    address: "456 Queen St W, Toronto, ON M5V 2B5, Canada",
    categories: ["Japanese", "Sushi", "Asian Fusion"],
  },
  {
    name: "Burger Bliss",
    address: "789 King St W, Toronto, ON M5V 1N4, Canada",
    categories: ["American", "Burgers", "Fast Food"],
  },
  {
    name: "Veggie Delight",
    address: "101 Spadina Ave, Toronto, ON M5V 2K2, Canada",
    categories: ["Vegetarian", "Vegan", "Healthy"],
  },
];

export default function RestaurantGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Restaurant Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {restaurants.map((restaurant, index) => (
          <CardRestaurant restaurant={restaurant} key={index} />
        ))}
      </div>
    </div>
  );
}
