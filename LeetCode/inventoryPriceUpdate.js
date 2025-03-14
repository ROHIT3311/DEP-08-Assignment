let arr = [
  { id: 1, name: "Widget", price: 50, quantity: 120 },
  { id: 2, name: "Gadget", price: 30, quantity: 80 },
  { id: 3, name: "Doohickey", price: 100, quantity: 200 },
  { id: 4, name: "Thingamajig", price: 75, quantity: 90 },
];

let discountedPrice = arr.map((prod) => {
  if (prod.quantity > 100) {
    return { ...prod, price: prod.price * 0.9 };
  }

  return prod;
});

let receivedDiscountedProducts = discountedPrice.filter((prod) => {
  return prod.quantity > 100;
});

receivedDiscountedProducts.forEach((prod) => {
  console.log(`Product Name : ${prod.name}, Product Price : ${prod.price}`);
});

console.log(receivedDiscountedProducts);
