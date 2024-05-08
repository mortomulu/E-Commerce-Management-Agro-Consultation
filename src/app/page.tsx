import { createClient } from "@/utils/supabase/server";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import ProductCard from "@/components/productCard/ProductCard";
import { useState } from "react";

export default async function Page() {
  const supabase = createClient();

  const { data: todos } = await supabase.from("products").select();

  return (
    <div className="grid grid-cols-4 gap-4">
      {todos?.map((todo, i) => (
         <ProductCard todo={todo} />
      ))}
    </div>
  );
}
