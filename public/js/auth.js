async function login(){

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const res = await fetch("/api/auth",{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify({
      email,
      password
    })

  });

  const data = await res.json();

  if(data.admin){

    localStorage.setItem("admin","true");

    window.location = "/admin.html";

  }else{
    alert("Invalid");
  }

}