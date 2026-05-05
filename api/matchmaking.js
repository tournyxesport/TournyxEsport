let queue = [];

export default function handler(req, res) {
  const { userId } = req.body;

  queue.push(userId);

  if (queue.length >= 10) {
    const match = {
      id: Date.now(),
      players: queue.splice(0, 10),
      status: "live"
    };

    return res.json({ matchCreated: match });
  }

  res.json({ status: "waiting", queue });
}
