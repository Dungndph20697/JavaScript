let indexSlide = 0;
let slide = document.getElementById("slide");
let arrSlide = [
  "../img/banner1.jpg",
  "../img/banner2.jpg",
  "../img/banner3.jpg",
  "../img/banner4.jpg",
  "../img/banner5.jpg",
];
function showSlide() {
  if (indexSlide > arrSlide.length - 1) indexSlide = 0;
  if (indexSlide < 0) indexSlide = arrSlide.length - 1;
  slide.src = arrSlide[indexSlide];
}

function nextSlide() {
  indexSlide++;
  showSlide(indexSlide);
}

function prevSlide() {
  indexSlide--;
  showSlide(indexSlide);
}

setInterval(nextSlide, 3000);

function show(arr) {
  let divProduct = document.getElementById("bodyProduct");
  let product = "";

  for (const element of arr) {
    product +=
      "<div class='product'><img src='" +
      element.img +
      "' alt='' class='img-pro' /><h3 class='name-pro'><a href=''>" +
      element.name +
      "</a><p class='price'>" +
      Number(element.price).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }) +
      "</p><div></div> <button class='btn btn-primary' style='float: left; width: 140px;height:70px'>Thêm vào giỏ hàng</button>" +
      "<button class='btn btn-danger' style='width: 140px;height:70px'>Mua ngay</button></div></>";
  }
  product += "</product>";
  divProduct.innerHTML = product;
}
show(JSON.parse(localStorage.getItem("arrProduct")));

function search() {
  let inputSearch = document.getElementById("inputSearch").value;
  if (inputSearch == "") {
    show(arrProduct);
  } else {
    let resultArr = arrProduct.filter((e) => e.name.includes(inputSearch));
    show(resultArr);
  }
}
