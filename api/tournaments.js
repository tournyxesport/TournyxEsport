import { supabase } from "../lib/supabase.js";

export default async function handler(req, res) {

  if (req.method === "GET") {
    const { data } = await supabase.from("tournaments").select("*");
    return res.json(data);
  }

  if (req.method === "POST") {
    const { title, game, image, entry_fee, cashprize, sponsors } = req.body;

    const { data } = await supabase.from("tournaments").insert([
      { title, game, image, entry_fee, cashprize, sponsors }
    ]);

    return res.json(data);
  }
}
