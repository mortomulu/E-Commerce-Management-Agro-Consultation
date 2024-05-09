import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = createClient();
  try {
    const { data: notes } = await supabase.from("products").select();
    return NextResponse.json(notes);
  } catch {}
}
