import { supabase } from "../lib/supabase.js";

const ADMIN_EMAIL = "admin@tournyx.com";
const ADMIN_PASSWORD = "Dark2005$";

export default async function handler(req, res) {
  const { action, username, password } = req.body;

  if (action === "login") {

    // 👑 ADMIN LOGIN
    if (username === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      return res.json({
        user: {
          id: "admin",
          username: "Tournyx Admin",
          role: "admin"
        }
      });
    }

    // 👤 USER LOGIN
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .eq("password", password)
      .single();

    if (!data) return res.status(401).json({ error: "invalid" });

    return res.json({ user: data });
  }
}
