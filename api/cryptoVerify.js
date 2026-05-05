export default async function handler(req, res) {

  const { txHash, amount } = req.body;

  // ⚠️ à remplacer par API BSCScan
  if (!txHash) {
    return res.status(400).json({ error: "invalid tx" });
  }

  // simulation validée
  return res.json({
    success: true,
    amount,
    status: "confirmed"
  });
}
