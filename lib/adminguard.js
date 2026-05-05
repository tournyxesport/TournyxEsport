const ADMIN_TOKEN = "tournyx_secure_admin_token_2026";

export function isAdmin(req) {
  const token = req.headers["x-admin-token"];
  return token === ADMIN_TOKEN;
}
