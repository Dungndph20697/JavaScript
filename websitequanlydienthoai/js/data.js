let p = new product(
  1,
  "Iphone",
  "iphone 16",
  20000000,
  "../img/iphone_16_pro_trang.webp"
);
let p2 = new product(
  2,
  "Samsung",
  "Samsung Galaxy Z Fold6 5G 256GB",
  37000000,
  "../img/samsung_galaxy_z_fold6_gray_a413f785af.webp"
);
let p9 = new product(
  3,
  "Samsung",
  "Samsung Galaxy S24 FE 5G 128GB",
  12890000,
  "../img/samssung_galaxy_s24_fe_xanh_723e4e6443.webp"
);
let p3 = new product(
  4,
  "Oppo",
  "OPPO A3 6GB 128GB",
  4590000,
  "../img/oppo_a3_den_5_1b29542df8.webp"
);
let p8 = new product(
  5,
  "Iphone",
  "iPhone 13 128GB",
  11790000,
  "../img/iphone_13_b06d633f18.webp"
);
let p4 = new product(
  6,
  "Nokia",
  "Nokia 220 4G",
  985000,
  "../img/2024_5_30_638526598199209755_nokia-220-4g-cam-3.webp"
);
let p7 = new product(
  7,
  "Nokia",
  "Nokia HMD 105 4G",
  650000,
  "../img/hmd_105_4g_black_c4bfc0f19b.webp"
);
let p5 = new product(
  8,
  "Xiaomi",
  "Xiaomi Redmi Note 14 5G 8GB 256GB",
  7290000,
  "../img/xiaomi_redmi_note_14_5g_xanh_3_a16f31cae7.webp"
);
let p6 = new product(
  9,
  "Xiaomi",
  "Xiaomi Redmi Note 14 5G 8GB 256GB",
  7290000,
  "../img/xiaomi_redmi_note_14_5g_xanh_3_a16f31cae7.webp"
);
let arrProduct = [p, p2, p3, p4, p5, p6, p7, p8, p9];
let arrCart = [];
function dataCart() {
  if (!localStorage.getItem("arrCart")) {
    localStorage.setItem("arrCart", JSON.stringify(arrCart));
  }
}
dataCart();
function fakeData() {
  if (!localStorage.getItem("arrProduct")) {
    localStorage.setItem("arrProduct", JSON.stringify(arrProduct));
  }
}
fakeData();
