import { createClient } from "@/utils/supabase/server";
import ProductCard from "@/components/productCard/ProductCard";
import Navbar from "@/components/navbar/Navbar";

export default async function Page() {
  const supabase = createClient();

  const { data: todos } = await supabase.from("products").select();

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 gap-4 mx-8">
        {todos?.map((todo, i) => (
          <ProductCard todo={todo} />
        ))}
      </div>
    </>
  );
}
