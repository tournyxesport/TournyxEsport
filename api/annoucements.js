import { supabase } from "../lib/supabase.js";

export default async function handler(req, res) {

  if (req.method === "GET") {
    const { data } = await supabase.from("announcements").select("*");
    return res.json(data);
  }

  if (req.method === "POST") {
    const { title, image, type } = req.body;

    const { data } = await supabase.from("announcements").insert([
      { title, image, type }
    ]);

    return res.json(data);
  }
}
