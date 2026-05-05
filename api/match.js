let matches = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.json(matches);
  }

  if (req.method === "POST") {
    const match = {
      id: Date.now(),
      status: "live",
      score: { A: 0, B: 0 }
    };

    matches.push(match);

    return res.json(match);
  }
}
