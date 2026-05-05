function loadMatches() {
  fetch("/api/match", {
    method: "GET"
  })
  .then(r => r.json())
  .then(data => {
    matches.innerHTML = data.map(m =>
      `<div>
        <h3>Match ${m.id}</h3>
        <p>Status: ${m.status}</p>
        <button onclick="joinQueue()">Join Queue</button>
      </div>`
    ).join("");
  });
}
