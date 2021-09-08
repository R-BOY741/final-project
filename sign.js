function register() {
  // GETTING DATA FROM FORM
  let first_name = document.querySelector("#first_name").value;
  let last_name = document.querySelector("#last_name").value;
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  console.log(first_name, last_name, username, password);

  //   SEND DATA TO API
  fetch("https://enigmatic-mesa-96671.herokuapp.com/user-registration/", {
    method: "POST",
    body: JSON.stringify({
      first_name,
      last_name,
      username,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status_code == 201) {
        document.querySelector("#error").innerHTML =
          "You have successfully registered, please sign in to continue";
        setTimeout(function () {
          window.location = "./index.html";
        }, 3000);
      }
    });
}
