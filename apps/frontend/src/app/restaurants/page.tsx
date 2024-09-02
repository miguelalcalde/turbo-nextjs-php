import { Restaurant } from "@/types/restaurant";
import { CardRestaurant } from "@/components/card-restaurant";
import Paginator from "@/components/paginator";

async function getRestaurants(
  page: number = 1
): Promise<{ restaurants: Restaurant[]; totalPages: number }> {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/restaurants?page=${page}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  const data = await response.json();
  return { restaurants: data.data, totalPages: data.meta.total_pages };
}

export default async function RestaurantGrid({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  let restaurants: Restaurant[];
  let totalPages: number;

  try {
    const { restaurants: fetchedRestaurants, totalPages: fetchedTotalPages } =
      await getRestaurants(currentPage);
    restaurants = fetchedRestaurants;
    totalPages = fetchedTotalPages;
  } catch (error) {
    return <div>Error fetching restaurants. Please try again later.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <CardRestaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      <Paginator
        totalPages={totalPages}
        basePath="/restaurants"
        className="mt-8"
      />
    </div>
  );
}
