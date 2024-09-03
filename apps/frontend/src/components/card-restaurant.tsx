import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Restaurant } from "@/types/restaurant";

const categoryColors = [
  "bg-red-100 text-red-800",
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
];

export function CardRestaurant({ restaurant }: { restaurant: Restaurant }) {
  return (
    <Link href={`/restaurants/${restaurant.id}`} passHref>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl">{restaurant.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <address className="not-italic mb-4 text-sm text-muted-foreground">
            {restaurant.address}
          </address>
          <div className="relative">
            <div className="flex overflow-x-auto pb-2 scrollbar-hide">
              {restaurant.categories.map(
                (category: string, catIndex: number) => (
                  <span
                    key={catIndex}
                    className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap mr-2 ${
                      categoryColors[catIndex % categoryColors.length]
                    }`}
                  >
                    {category}
                  </span>
                )
              )}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
