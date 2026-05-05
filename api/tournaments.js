import { supabase } from "../lib/supabase.js";

export default async function handler(req, res) {

  // 🔐 récupérer user depuis token
  const token = req.headers.authorization?.replace("Bearer ", "");

  const { data: userData } = await supabase.auth.getUser(token);

  if (!userData.user) {
    return res.status(401).json({ error: "unauthorized" });
  }

  if (req.method === "GET") {
    const { data } = await supabase.from("tournaments").select("*");
    return res.json(data);
  }

  if (req.method === "POST") {

    if (userData.user.role !== "admin") {
      return res.status(403).json({ error: "admin only" });
    }

    const { title, game, image, entry_fee, cashprize } = req.body;

    const { data } = await supabase.from("tournaments").insert([
      { title, game, image, entry_fee, cashprize }
    ]);

    return res.json(data);
  }
}
