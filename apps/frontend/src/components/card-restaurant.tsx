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
          <div className="flex flex-wrap gap-2">
            {restaurant.categories.map((category: string, catIndex: number) => (
              <span
                key={catIndex}
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  categoryColors[catIndex % categoryColors.length]
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
