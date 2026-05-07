fetch("/api/announcements")
.then(r => r.json())
.then(data => {

  document.getElementById("ann").innerHTML =
    data.map(a => `
      <div class="card">

        <img src="${a.image}">

        <h2>${a.title}</h2>

        <p>${a.type}</p>

      </div>
    `).join("");

});