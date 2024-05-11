import { NextResponse } from "next/server";
import { addProduct } from "@/types/addProduct";
import { uuid } from "uuidv4";

export async function getProducts () {

  const url = process.env.NEXT_PUBLIC_BASE_URL

  try {
    const response = await fetch(`${url}/api/products`, { next: { revalidate: 10 } });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// export const postImage = async ( img : any) => {
//   const supabase = createClient();
//     const filename = `agromerce-${uuid()}`;

//     const { data, error } = await supabase.storage
//       .from("images")
//       .upload(filename, img, {
//         cacheControl: "3600",
//         upsert: false,
//       });

//     const filepath = data?.path;
//     return filepath
// }

export const postProduct = async (productData : addProduct) => {

  const url = process.env.NEXT_PUBLIC_BASE_URL

  try {
    const response = await fetch(`${url}/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error('Failed to add product');
    }

    console.log('Product added successfully');
    const datawo = await response.json();
    return NextResponse.json({
      status: 204,
      statusText: 'No Content'
    });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json(new Error('Failed to delete product'));
  }
};



export const deleteProduct = async (id: number) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL
  try {
    const response = await fetch(`${url}/api/products/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete product');
    }

    console.log('Product deleted successfully');
    return NextResponse.json({
      status: 204,
      statusText: 'No Content'
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(new Error('Failed to delete product'));
  }
};