import { Dish } from "@/types/dish";
import { CardDish } from "@/components/card-dish";
import Paginator from "@/components/paginator";

async function getDishes(
  page: number = 1
): Promise<{ dishes: Dish[]; totalPages: number }> {
  const response = await fetch(
    `${process.env.API_ENDPOINT}/dishes?page=${page}`,
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

export default async function DishGrid({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  let dishes: Dish[];
  let totalPages: number;

  try {
    const { dishes: fetchedDishes, totalPages: fetchedTotalPages } =
      await getDishes(currentPage);
    dishes = fetchedDishes;
    totalPages = fetchedTotalPages;
  } catch (error) {
    return <div>Error fetching dishes. Please try again later.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <CardDish key={dish.id} dish={dish} />
        ))}
      </div>
      <Paginator totalPages={totalPages} basePath="/dishes" className="mt-8" />
    </div>
  );
}
