import { isAdmin } from "../lib/adminGuard.js";

export default function handler(req, res) {

  if (!isAdmin(req)) {
    return res.status(403).json({ error: "forbidden" });
  }

  res.json({ status: "admin access granted" });
}
