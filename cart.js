fetch("https://enigmatic-mesa-96671.herokuapp.com/get-items/", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    localStorage.products = JSON.stringify(data.data);
  });

//CREATING CARD

function createCard(card) {
  let cardContainer = document.querySelector(".container");
  card.forEach((product) => {
    cardContainer.innerHTML += `
    <div class="project-card">
    <img src="./dell.jpg" alt="Image of Contact Page" class="img" />
    <div>
      <h2 class="card-heading">Laptop</h2>
      <h3 class="card-subtitle">Dell</h3>
      <p class="card-description">vostro 15 3000 series<br /></p>
      <!--Buttons #1-->
      <div class="card-buttons">
        <a href="" target="_blank" class="button">Add to cart</a>
        <a href="" target="_blank" class="button">R11 700</a>
      </div>
    </div>
  </div>
      `;
  });
}

// //ADDING TO CART
// console.log(JSON.parse(localStorage.getItem("products")));
// createCard(JSON.parse(localStorage.getItem("products")));

// function addToCart(id) {
//   fetch("https://lit-beach-56409.herokuapp.com/sort-product/", {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       let products = data.data;
//       console.log(products);
//       let cartProduct = products.find((product) => {
//         return product[0] == id;
//       });

//       console.log(cartProduct);
//       let cartProducts =
//         JSON.parse(localStorage.getItem("cart products")) || [];
//       cartProducts.push(cartProduct);

//       localStorage.setItem("cart products", JSON.stringify(cartProducts));
//       showCartItems(cartProducts);
//     });
// }
