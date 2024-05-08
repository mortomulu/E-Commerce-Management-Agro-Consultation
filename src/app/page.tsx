import { createClient } from "@/utils/supabase/server";
import ProductCard from "@/components/productCard/ProductCard";
import Navbar from "@/components/navbar/Navbar";
import Slider from "@/components/slider/Slider";
import CategoryBar from "@/components/categoryBar/CategoryBar";

export default async function Page() {
  const supabase = createClient();

  const { data: todos } = await supabase.from("products").select();

  return (
    <>
      <Navbar />
      <div className="px-8 mb-8 pt-24">
        <Slider />
      </div>
      <div className="flex mx-8 pb-8">
        <CategoryBar />
        <div className="grid grid-cols-4 gap-4 mx-8 pb-8">
          {todos?.map((todo, i) => (
            <ProductCard todo={todo} />
          ))}
        </div>
      </div>
    </>
  );
}
