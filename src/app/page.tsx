import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import Image from "next/image";
import Price from '@/components/Price'


export default async function Page() {
  const supabase = createClient();

  const { data: todos } = await supabase.from("products").select();

  return (
    <ul>
      <div className="flex flex-wrap">
        {todos?.map((todo, i) => (
           
          <div key={i} className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
            <div className="h-72 border-b-2 border-palette-lighter relative">
              <img
                src={todo.url_image}
                alt={todo.product_name}
                 
                className="transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div className="h-48 relative">
              <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                {todo.product_name}
              </div>
              <div className="text-lg text-gray-600 p-4 font-primary font-light">
                {todo.desc}
              </div>
              <div
                className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
                rounded-tl-sm triangle"
              >
                <Price
                  currency="$"
                  num={todo.price}
                  numSize="text-lg"
                />
              </div>
            </div>
          </div>
         
        ))}
      </div>
    </ul>
  );
}
