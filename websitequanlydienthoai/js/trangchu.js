let indexSlide = 0;
let tempArr = JSON.parse(localStorage.getItem("arrCart"));
let countCart = tempArr.length;
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
  showSlide();
}

function prevSlide() {
  indexSlide--;
  showSlide();
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
      "</p><div></div> <button class='btn btn-primary' style='float: left; width: 140px;height:70px' onclick='addToCart(" +
      element.id +
      ")'>Thêm vào giỏ hàng</button>" +
      "<button class='btn btn-danger' style='width: 140px;height:70px'>Mua ngay</button></div></>";
  }
  product += "</product>";
  divProduct.innerHTML = product;
}
show(JSON.parse(localStorage.getItem("arrProduct")));

function findProductById(id) {
  let arr = JSON.parse(localStorage.getItem("arrProduct"));
  for (const element of arr) {
    if (element.id == id) {
      return element;
    }
  }
  return null;
}

function search(event) {
  if (event) event.preventDefault();
  let inputSearch = document.getElementById("inputSearch").value;
  console.log("a");
  if (inputSearch == "") {
    show(arrProduct);
  } else {
    let resultArr = JSON.parse(localStorage.getItem("arrProduct")).filter((e) =>
      e.name.toLowerCase().includes(inputSearch)
    );
    show(resultArr);
  }
}

function loadCountCart() {
  let spanCountCart = document.getElementById("cart-count");
  spanCountCart.innerHTML = countCart;
}

loadCountCart();

function addToCart(id) {
  let spanCountCart = document.getElementById("cart-count");
  if (findProductById(id) != null) {
    let product = findProductById(id);
    if (checkProductInArrCart(product) == true) {
      for (const element of arrCart) {
        if (element.id == product.id) {
          element.quantity++;
        }
      }
      localStorage.removeItem("arrCart");
      localStorage.setItem("arrCart", JSON.stringify(arrCart));
    } else {
      countCart++;
      spanCountCart.innerHTML = countCart;
      product.quantity = 1;
      arrCart.push(product);
      localStorage.setItem("arrCart", JSON.stringify(arrCart));
      showToast();
    }
  }
}

function checkProductInArrCart(product) {
  arrCart = JSON.parse(localStorage.getItem("arrCart"));
  for (const element of arrCart) {
    if (product.id == element.id) return true;
  }
  return false;
}

function showToast() {
  let toast = document.getElementById("myToast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // 3 giây sau tự ẩn
}
