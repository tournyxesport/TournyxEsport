fetch("/api/sponsors")
.then(r => r.json())
.then(data => {

  document.getElementById("sponsors").innerHTML =
    data.map(s => `
      <div class="card">

        <img src="${s.image}">

        <h3>${s.title}</h3>

        <a href="${s.link}">
          <button>Visit Sponsor</button>
        </a>

      </div>
    `).join("");

});