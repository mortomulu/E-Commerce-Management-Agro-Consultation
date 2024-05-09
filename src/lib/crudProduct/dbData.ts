import { createClient } from "@/utils/supabase/server";
import { error } from "console";

const supabase = createClient();

export const removeData = async (id: number) => {
  try {
    const { error } = await supabase.from("products").delete().eq("id", { id });

    if (error) {
      throw error;
    }
  } catch {
    console.error(error);
  }
};
