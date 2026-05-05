function joinQueue() {
  fetch("/api/matchmaking", {
    method: "POST",
    body: JSON.stringify({ userId: 1 }),
    headers: { "Content-Type": "application/json" }
  })
  .then(r => r.json())
  .then(data => {
    status.innerText = "In queue...";
  });
}
