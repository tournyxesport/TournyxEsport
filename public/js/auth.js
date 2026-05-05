function register() {
  fetch("/api/auth", {
    method: "POST",
    body: JSON.stringify({
      action: "register",
      username: user.value,
      password: pass.value
    }),
    headers: { "Content-Type": "application/json" }
  })
  .then(r => r.json())
  .then(console.log);
}

function login() {
  fetch("/api/auth", {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      username: user.value,
      password: pass.value
    }),
    headers: { "Content-Type": "application/json" }
  })
  .then(r => r.json())
  .then(data => {
    localStorage.setItem("token", data.token);
    window.location = "dashboard.html";
  });
}
