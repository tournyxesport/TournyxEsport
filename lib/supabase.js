import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tcfbeugmpzhhcueamobo.supabase.co",
  process.env.SUPABASE_KEY
);
