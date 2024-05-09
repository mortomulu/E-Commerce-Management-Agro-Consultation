import ProductCard from "@/components/productCard/ProductCard";
import Navbar from "@/components/navbar/Navbar";
import Slider from "@/components/slider/Slider";
import CategoryBar from "@/components/categoryBar/CategoryBar";
import { getProducts } from "@/lib/crudProduct/dbData";
import { Product } from "@/types/product";


export default async function Page() {
  const todos = await getProducts();

  return (
    <>
      <Navbar />
      <div className="px-8 mb-8 pt-24">
        <Slider />
      </div>
      <div className="flex mx-8 pb-8">
        <CategoryBar />
        <div className="grid grid-cols-4 gap-4 mx-8 pb-8">
          {todos?.map((todo: Product, i: number) => (
            <ProductCard key={i} todo={todo} />
          ))}
        </div>
      </div>
    </>
  );
}
