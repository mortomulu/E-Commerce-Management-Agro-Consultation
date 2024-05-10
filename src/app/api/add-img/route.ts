import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { uuid } from "uuidv4";

export async function POST(image: any) {
  const supabase = createClient();
  const filename = `agromerce-${uuid()}`;

  const { data, error } = await supabase.storage
    .from("images")
    .upload(filename, image, {
      cacheControl: "3600",
      upsert: false,
    });

  const filepath = data?.path;
  return filepath;
}
