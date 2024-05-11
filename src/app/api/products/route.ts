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
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  try {
    // Pastikan objek JSON telah terbentuk dengan benar
    if (!requestBody) {
      throw new Error("Request body is empty or not in JSON format");
    }

    const { data, error } = await supabase.from("products").insert({
      product_name: requestBody.product_name,
      price: requestBody.price,
      product_category: requestBody.product_category,
      url_image: requestBody.url_image,
      desc: requestBody.desc,
    });

    if (error) {
    }

    console.log("Product added successfully");
    return NextResponse.json({
      status: 201,
      statusText: "Created",
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      data,
    });
  } catch (error) {
    console.error("Error adding product:");
    throw new Error("Failed to add product");
  }
}
