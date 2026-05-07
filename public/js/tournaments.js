fetch("/api/tournaments")
.then(r => r.json())
.then(data => {

  document.getElementById("tournaments").innerHTML =
    data.map(t => `
      <div class="card">

        <img src="${t.image}">

        <h2>${t.title}</h2>

        <p>${t.game}</p>

        <p>Entry: ${t.entry_fee} USDT</p>

        <p>Prize: ${t.cashprize}</p>

        <p>${t.sponsors || ""}</p>

        <button onclick="joinTournament(${t.entry_fee})">
          Join Tournament
        </button>

      </div>
    `).join("");

});

function joinTournament(amount){

  const txHash = prompt("Paste USDT transaction hash");

  fetch("/api/cryptoVerify", {

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify({
      txHash,
      amount
    })

  })
  .then(r=>r.json())
  .then(data=>{

    if(data.success){
      alert("Tournament joined ✅");
    }else{
      alert("Payment failed");
    }

  });

}