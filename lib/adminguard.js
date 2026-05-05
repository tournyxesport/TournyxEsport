export function isAdmin(req) {
  const role = req.headers["x-role"];
  const token = req.headers["x-token"];

  return role === "admin" && token;
}
