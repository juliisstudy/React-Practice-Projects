const { it } = require("date-fns/locale");

const items = [
  { name: "bike", price: 100 },
  { name: "tv", price: 1000 },
  { name: "book", price: 10 },
  { name: "phone", price: 1000 },
  { name: "keyboard", price: 200 },
];

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

const itemNames = items.map((item) => {
  return item.name;
});

const foundItem = items.find((item) => {
  return item.name === "book";
});
items.forEach((item) => {
  console.log(item.price);
});
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});
const hasInexpensiveItemEver = items.every((item) => {
  return item.price <= 1000;
});
const total = items.reduce((currenTotal, item) => {
  return item.price + currenTotal;
}, 0);
const includesTwo = items.includes("tv");

console.log(total);
