async function createTournament(){

  await fetch("/api/tournaments",{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify({

      title:tTitle.value,
      game:tGame.value,
      image:tImage.value,
      entry_fee:tFee.value,
      cashprize:tPrize.value

    })

  });

  alert("Tournament published");

}

async function createShop(){

  await fetch("/api/shop",{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify({

      title:sTitle.value,
      image:sImage.value,
      affiliate_link:sLink.value,
      price:sPrice.value

    })

  });

  alert("Product published");

}

async function createSponsor(){

  await fetch("/api/sponsors",{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify({

      title:spTitle.value,
      image:spImage.value,
      link:spLink.value

    })

  });

  alert("Sponsor published");

}