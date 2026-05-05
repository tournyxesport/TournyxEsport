// SHOP
fetch("/api/shop")
.then(r => r.json())
.then(data => {
  shopList.innerHTML = data.map(p => `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.title}</h3>
      <a href="${p.affiliate_link}">
        <button>Buy</button>
      </a>
    </div>
  `).join("");
});

// TOURNAMENT
fetch("/api/tournaments")
.then(r => r.json())
.then(data => {
  tournamentList.innerHTML = data.map(t => `
    <div class="card">
      <img src="${t.image}">
      <h3>${t.title}</h3>
      <p>${t.game}</p>
      <p>${t.entry_fee}$</p>
      <button onclick="pay(${t.entry_fee})">Join</button>
    </div>
  `).join("");
});

function pay(amount){
  const tx = prompt("Paste TX HASH");
  fetch("/api/cryptoVerify", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({txHash:tx, amount})
  })
  .then(r=>r.json())
  .then(d=>alert(d.success ? "Paid ✅" : "Error"));
}

// ANNOUNCEMENTS
fetch("/api/announcements")
.then(r => r.json())
.then(data => {
  annList.innerHTML = data.map(a => `
    <div class="card">
      <img src="${a.image}">
      <h3>${a.title}</h3>
    </div>
  `).join("");
});
