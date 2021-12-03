const products = [
  { name: "t-shits", price: 150 },
  { name: "jeans", price: 250 },
  { name: "underwear", price: 40 },
  { name: "socks", price: 30 },
  { name: "accessories", price: 50 },
];

//answer 1 (not the best because it is not chaining)
// const filteredProducts = products.filter((product) => product.price > 40);

// const promos = filteredProducts.map(
//   (product) => `the ${product.name} in ${product.price / 2} kr`
// );

// console.log(filteredProducts);
// console.log(promos);

//answer 2 THE BEST OPTION CHAINING

const promos = products
  .filter((product) => product.price > 40)
  .map((product) => `the ${product.name} in ${product.price / 2} kr`);

console.log(promos);
