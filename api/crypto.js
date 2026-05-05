const WALLET = "0x3021AF173Aa69C8b66C7850aa6C6DFc3F66C4233";

export default function handler(req, res) {
  const { txHash } = req.body;

  res.json({
    wallet: WALLET,
    status: "verify via BSCScan",
    txHash
  });
}
