import Image from "next/image";
import { Leaf, Flame, Clock, MapPin, Phone, Globe } from "lucide-react";
import { Restaurant } from "@/types/restaurant";
import { Dish } from "@/types/dish";
import { CardDish } from "@/components/card-dish";
import Paginator from "@/components/paginator";

async function getRestaurant(id: string): Promise<Restaurant> {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/restaurants/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch restaurant");
  }
  return await response.json();
}

async function getRestaurantDishes(
  id: string,
  page: number = 1
): Promise<{ dishes: Dish[]; totalPages: number }> {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/restaurants/${id}/dishes?page=${page}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch dishes");
  }
  const data = await response.json();
  return { dishes: data.data, totalPages: data.meta.total_pages };
}

export default async function RestaurantPage({
  params,
  searchParams,
}: {
  params: { restaurantId: string };
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const restaurant = await getRestaurant(params.restaurantId);
  const { dishes, totalPages } = await getRestaurantDishes(
    params.restaurantId,
    currentPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <RestaurantInfo restaurant={restaurant} />
      <h2 className="text-2xl font-bold mt-12 mb-6">Our Menu</h2>
      <DishGrid
        dishes={dishes}
        totalPages={totalPages}
        restaurantId={params.restaurantId}
        currentPage={currentPage}
      />
    </div>
  );
}

function RestaurantInfo({ restaurant }: { restaurant: Restaurant }) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={restaurant.image || "/placeholder.svg"}
          alt={restaurant.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
        <p className="text-muted-foreground mb-4">
          {restaurant.categories.join(", ")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-primary" />
            <span>{`${restaurant.address}, ${restaurant.city}, ${restaurant.province} ${restaurant.postalCode}`}</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-5 w-5 mr-2 text-primary" />
            <span>{restaurant.country}</span>
          </div>
          {restaurant.priceRange && (
            <div className="flex items-center">
              <span className="font-bold mr-2">Price Range:</span>
              <span>{restaurant.priceRange}</span>
            </div>
          )}
          {restaurant.rating && (
            <div className="flex items-center">
              <span className="font-bold mr-2">Rating:</span>
              <span>{restaurant.rating}</span>
            </div>
          )}
          {restaurant.openingHours && (
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              <span>{restaurant.openingHours}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DishGrid({
  dishes,
  totalPages,
  restaurantId,
  currentPage,
}: {
  dishes: Dish[];
  totalPages: number;
  restaurantId: string;
  currentPage: number;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <CardDish key={dish.id} dish={dish} />
        ))}
      </div>
      <Paginator
        totalPages={totalPages}
        basePath={`/restaurants/${restaurantId}`}
        className="mt-8"
      />
    </div>
  );
}
