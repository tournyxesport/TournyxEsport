fetch("/api/shop")
.then(r => r.json())
.then(data => {

  document.getElementById("shop").innerHTML =
    data.map(p => `
      <div class="card">

        <img src="${p.image}">

        <h2>${p.title}</h2>

        <p>${p.price}</p>

        <a href="${p.affiliate_link}">
          <button>Buy</button>
        </a>

      </div>
    `).join("");

});