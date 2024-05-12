
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { addProduct } from "@/types/addProduct";
import { corsHeaders } from "@/utils/supabase/_shared/cors";

export async function GET() {
  const supabase = createClient();
  try {
    const { data: notes } = await supabase.from("products").select();
    return NextResponse.json(notes);
  } catch {}
}

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const requestBody = await req.json();
  console.log(requestBody)
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    if (!requestBody) {
      throw new Error("Request body is empty or not in JSON format");
    }

    const fileName = requestBody.url_image;

    if (!fileName){
      console.log("image tidak ada")
    }


    const { data: fileData, error: fileError } = await supabase.storage
      .from("image")
      // .upload(`${fileName}`, fileName);
      .upload(`${fileName}-${Date.now()}`, fileName);

    console.log("dibawah function up storage");

    const filepath = fileData?.path;

    if (!filepath) {
      throw new Error("Failed to upload image to Supabase Storage");
    }

    const { data, error } = await supabase.from("products").insert({
      product_name: requestBody.product_name,
      price: requestBody.price,
      product_category: requestBody.product_category,
      url_image: filepath,
      desc: requestBody.desc,
    });

    if (req.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE",
        },
      });
    }

    if (error || fileError) {
      console.error(fileError);
      throw new Error(`error massage : ${fileError}, ${requestBody}`);
    }

    console.log("Product added successfully");
    return NextResponse.json({
      status: 201,
      statusText: "Created",
      headers: { ...headers },
      data,
    });
  } catch (error) {
    console.error("Error adding product");
    throw new Error("Failed to add product");
  }
}
