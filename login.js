let signInButton = document.querySelector(".form");

function login(username, password) {
  console.log(username);
  console.log(password);
  fetch(" http://127.0.0.1:5000/user-registration/", {
    method: "PATCH",
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = "./main.html";
    });
}
