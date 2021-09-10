// fetch("https://enigmatic-mesa-96671.herokuapp.com/get-items/", {
//   method: "GET",
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     let products = data.data;

//     localStorage.products = JSON.stringify(data.data);

//     let container = document.querySelector(".container");
//     container.innerHTML = "";

//     products.forEach((product) => (container.innerHTML += createCard(product)));

//     console.log(item);
//   });

// //CREATING CARD

// function createCard(card) {
//   let cardContainer = document.querySelector(".project-card");
//   card.forEach((product) => {
//     cardContainer.innerHTML += `
//   <div class="project-card">
//   <img src="${product[5]}" alt="Image of Contact Page" class="img" />
//     <div>
//       <h2 class="card-heading">${product[3]}</h2>
//       <h3 class="card-subtitle">${product[1]}</h3>
//       <p class="card-description">${product[4]}</p>

//       <!--Buttons #1-->
//       <div class="card-buttons">
//         <button onclick="addToCart(${product[0]})" class="button">Add to cart</button>
//         <button class="button">R${product[2]}</button>
//       </div>
//     </div>
//   </div>
//       `;
//   });
// }

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
