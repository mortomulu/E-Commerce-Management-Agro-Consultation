import { NextResponse } from "next/server";
import { addProduct } from "@/types/addProduct";
import { uuid } from "uuidv4";

export async function getProducts () {
  try {
    const response = await fetch("http://localhost:3000/api/products");
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

  const coba = JSON.stringify(productData)
  // const supabase = createClient();

  
  try {
    console.log(coba)
    // console.log(req)
    // Ambil data dari FormData
    // const { product_name, price, product_category, url_image, desc } = productData;

    // // Gunakan data yang diterima untuk memasukkan produk baru ke dalam database
    // const { data, error } = await supabase
    //   .from("products")
    //   .insert(
    //     {
    //       product_name,
    //       price,
    //       product_category,
    //       url_image,
    //       desc
    //     }
    //   );
    //   console.log(data)
    // if (error) {
    //   throw error;
    // }

    // console.log('Product added successfully');
    // return NextResponse.json({
    //   status: 201,
    //   statusText: 'Created',
    //   data,
    // });

    const response = await fetch('http://localhost:3000/api/products', {
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
  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
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