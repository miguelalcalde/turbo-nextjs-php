"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Leaf, Flame } from "lucide-react";
import { Dish } from "@/types/dish";

const placeholderDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export function CardDish({ dish }: { dish: Dish }) {
  const [expanded, setExpanded] = useState(false);

  // Generate random mock values for dietary information
  const { isVegetarian, isVegan, isSpicy } = useMemo(
    () => ({
      isVegetarian: Math.random() < 0.3,
      isVegan: Math.random() < 0.2,
      isSpicy: Math.random() < 0.25,
    }),
    []
  );

  const description = dish.description || placeholderDescription;

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={dish.image || "/placeholder.svg"}
          alt={dish.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{dish.name}</h3>
          <span className="text-sm font-medium text-muted-foreground">
            $
            {(parseInt(dish.price_min) + parseInt(dish.price_max) / 2).toFixed(
              2
            )}
          </span>
        </div>
        <p
          className={`text-sm ${
            dish.description ? "text-muted-foreground" : "text-gray-400 italic"
          } mb-4`}
        >
          {expanded ? (
            description
          ) : description.length > 100 ? (
            <>
              <span>{description.slice(0, 100)}...</span>
              <button
                className="text-primary font-medium ml-1"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            </>
          ) : (
            description
          )}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex space-x-2">
            {isVegetarian && (
              <span className="text-green-600" title="Vegetarian">
                <Leaf size={16} />
              </span>
            )}
            {isVegan && (
              <span className="text-green-600" title="Vegan">
                <Leaf size={16} />
              </span>
            )}
            {isSpicy && (
              <span className="text-red-600" title="Spicy">
                <Flame size={16} />
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            ${dish.price_min} - ${dish.price_max}
          </span>
        </div>
      </div>
    </div>
  );
}
