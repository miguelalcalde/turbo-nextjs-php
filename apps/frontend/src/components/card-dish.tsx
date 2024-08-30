"use client";
import Image from "next/image";
import { useState } from "react";
import { Leaf, Flame } from "lucide-react";
import { Dish } from "@/types/dish";

export function CardDish({ dish }: { dish: Dish }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
      {/* {dish.image && (
        <div className="relative h-48 w-full">
          <Image
            src={dish.image}
            alt={dish.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )} */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{dish.name}</h3>
          <span className="text-sm font-medium text-muted-foreground">
            {dish.priceRange}
          </span>
        </div>
        {!!dish.description && (
          <p className="text-sm text-muted-foreground mb-4">
            {expanded
              ? dish.description
              : `${dish.description?.slice(0, 100)}...`}
            {dish.description?.length > 100 && (
              <button
                className="text-primary font-medium ml-1"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </p>
        )}
        <div className="flex space-x-2">
          {dish.isVegetarian && (
            <span className="text-green-600" title="Vegetarian">
              <Leaf size={16} />
            </span>
          )}
          {dish.isVegan && (
            <span className="text-green-600" title="Vegan">
              <Leaf size={16} />
            </span>
          )}
          {dish.isSpicy && (
            <span className="text-red-600" title="Spicy">
              <Flame size={16} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
