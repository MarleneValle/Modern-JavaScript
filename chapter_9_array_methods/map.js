// MAP METHOD cycles through an array and create a new array with update values

////EXAMPLE 1
const prices = [20, 10, 30, 25, 15, 40, 50, 5];

const salePrices = prices.map((price) => price / 2);

console.log(salePrices);

////EXAMPLE 2
const products = [
  { name: "Barbie", price: 205 },
  { name: "Lego", price: 220 },
  { name: "Cars", price: 100 },
  { name: "Robot", price: 300 },
  { name: "Ball", price: 150 },
];

const saleProducts = products.map((product) => {
  if (product.price > 200) {
    return { name: product.name, price: product.price - [product.price * 0.2] };
  } else {
    return product;
  }
});

console.log(saleProducts);
