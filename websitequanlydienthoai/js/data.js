let p = new product(
  1,
  "Iphone",
  "iphone 16",
  20000000,
  "../img/iphone_16_pro_trang.webp"
);
let p2 = new product(
  2,
  "Iphone",
  "iphone 15",
  20000000,
  "../img/iphone_15_pro_den.webp"
);
let p3 = new product(
  3,
  "Iphone",
  "iphone 16",
  20000000,
  "../img/iphone_16_blue.webp"
);
let p4 = new product(
  4,
  "Iphone",
  "iphone 15",
  20000000,
  "../img/iphone_16_pro_trang.webp"
);
let p5 = new product(
  5,
  "Iphone",
  "iphone 16",
  20000000,
  "../img/iphone_16_pro_trang.webp"
);
let arrProduct = [p, p2, p3, p4, p5];
let i = 0;
function fakeData() {
  if (!localStorage.getItem("arrProduct")) {
    localStorage.setItem("arrProduct", JSON.stringify(arrProduct));
  }
}
fakeData();
