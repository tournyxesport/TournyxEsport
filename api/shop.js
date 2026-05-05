import { supabase } from "../lib/supabase.js";

export default async function handler(req, res) {

  if (req.method === "GET") {
    const { data } = await supabase.from("shop").select("*");
    return res.json(data);
  }

  if (req.method === "POST") {
    const { title, image, affiliate_link, price } = req.body;

    const { data } = await supabase.from("shop").insert([
      { title, image, affiliate_link, price }
    ]);

    return res.json(data);
  }
}
