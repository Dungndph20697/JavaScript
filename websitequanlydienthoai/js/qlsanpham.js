let id = 1;
let idUpdate = -1;
let inputImgTemp = "";
function show(arr) {
  let tableProduct = document.getElementById("tableProduct");
  if (arr.length <= 0) {
    let listproduct =
      "<tbody><tr><td colspan='7'>Chưa có sản phẩm nào</td></tr></tbody>";
    tableProduct.innerHTML = listproduct;
  } else {
    let listproduct = "<tbody>";

    for (let i = 0; i < arr.length; i++) {
      listproduct +=
        "<tr>" +
        "<td>" +
        parseInt(i + 1) +
        "</td>" +
        "<td>" +
        arr[i].id +
        "</td>" +
        "<td><img src='" +
        arr[i].img +
        "'></td>" +
        "<td>" +
        arr[i].type +
        "</td>" +
        "<td>" +
        arr[i].name +
        "</td>" +
        "<td>" +
        Number(arr[i].price).toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        }) +
        "</td>" +
        "<td>" +
        "<button type='button' style='margin-bottom: 10px; width: 100px;' class='btn btn-primary' onclick='updateProduct(" +
        arr[i].id +
        ")'>Update</button>" +
        "<button type='button' style=' width: 100px;' class='btn btn-primary' onclick='deleteProduct(" +
        arr[i].id +
        ")'>Delete</button>" +
        "</td>";
    }
    listproduct += "</tbody>";
    tableProduct.innerHTML = listproduct;
  }
}
show(JSON.parse(localStorage.getItem("arrProduct")));

function fillter() {
  let typeFillter = document.getElementById("typeFillter").value;
  let order = document.getElementById("order").value;
  let arr = JSON.parse(localStorage.getItem("arrProduct"));
  if (typeFillter == "Type" || order == "None") {
    show(arr);
  }
  if (typeFillter == "Name" && order == "Tăng dần") {
    let result = arr.sort((a, b) => a.name.localeCompare(b.name));
    show(result);
  }
  if (typeFillter == "Name" && order == "Giảm dần") {
    let result = arr.sort((a, b) => b.name.localeCompare(a.name));
    show(result);
  }
  if (typeFillter == "Price" && order == "Giảm dần") {
    let result = arr.sort((a, b) => b.price - a.price);
    show(result);
  }
  if (typeFillter == "Price" && order == "Tăng dần") {
    let result = arr.sort((a, b) => a.price - b.price);
    show(result);
  }
}

function search() {
  let inputSearch = document.getElementById("inputSearch").value;
  if (inputSearch == "") {
    let arr = JSON.parse(localStorage.getItem("arrProduct"));
    show(arr);
  } else {
    let arr = JSON.parse(localStorage.getItem("arrProduct"));
    let resultSearch = arr.filter(
      (e) =>
        e.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
        e.type.toLowerCase().includes(inputSearch.toLowerCase()) ||
        e.price.toString().includes(inputSearch.toLowerCase())
    );
    show(resultSearch);
  }
}

function generatedId() {
  id++;
  let arr = JSON.parse(localStorage.getItem("arrProduct"));
  for (const element of arr) {
    if (element.id == id) return generatedId();
  }
  return id;
}

function findIndexById(id) {
  let arr = JSON.parse(localStorage.getItem("arrProduct"));
  for (let i = 0; i < arr.length; i++) {
    if (id == arr[i].id) return i;
  }
  return -1;
}
function deleteProduct(id) {
  let confirmDelete = confirm("Bạn có chắc chắn muốn xoá không?");
  if (confirmDelete) {
    let arr = JSON.parse(localStorage.getItem("arrProduct"));
    arr.splice(findIndexById(id), 1);
    localStorage.removeItem("arrProduct");
    localStorage.setItem("arrProduct", JSON.stringify(arr));
    show(JSON.parse(localStorage.getItem("arrProduct")));
  }
}

function creatProduct() {
  let inputName = document.getElementById("name").value;
  let inputPrice = document.getElementById("price").value;
  let selectType = document.getElementById("type").value;
  let inputImg = document.getElementById("inputImg").value;

  let arr = JSON.parse(localStorage.getItem("arrProduct"));
  if (validate(inputName, inputPrice, selectType, inputImg) === "OK") {
    let img = inputImg.split("\\");

    let p = new product(
      generatedId(),
      selectType,
      inputName,
      inputPrice,
      "../img/" + img[img.length - 1]
    );
    arr.unshift(p);
    localStorage.removeItem("arrProduct");
    localStorage.setItem("arrProduct", JSON.stringify(arr));
    show(JSON.parse(localStorage.getItem("arrProduct")));
    clearForm();
  } else {
    alert(validate(inputName, inputPrice, selectType, inputImg));
  }
}

function validate(name, price, type, img) {
  if (name == "") {
    return "Name not null";
  } else if (isNaN(price)) {
    return "Price must be number";
  } else if (+price <= 0) {
    return "Price must be greater than 0";
  } else if (type == "null") {
    return "Type not null";
  } else if (img == "") {
    return "Image not null";
  } else {
    return "OK";
  }
}

function clearForm() {
  let inputName = document.getElementById("name");
  let inputPrice = document.getElementById("price");
  let selectType = document.getElementById("type");
  let inputImg = document.getElementById("inputImg");
  let img = document.getElementById("img");
  idUpdate = -1;
  img.src = "";
  selectType.value = "null";
  inputName.value = "";
  inputPrice.value = "";
  inputImg.value = "";
}

function updateProduct(id) {
  let inputName = document.getElementById("name");
  let inputPrice = document.getElementById("price");
  let selectType = document.getElementById("type");
  let inputImg = document.getElementById("inputImg");
  let img = document.getElementById("img");
  let index = findIndexById(id);
  let arr = JSON.parse(localStorage.getItem("arrProduct"));
  img.src = arr[index].img;
  inputImgTemp = arr[index].img;
  inputName.value = arr[index].name;
  inputPrice.value = arr[index].price;
  selectType.value = arr[index].type;
  idUpdate = id;
  console.log(inputImg.value);
}

function changeImg() {
  let img = document.getElementById("img");
  let inputImg = document.getElementById("inputImg").value;
  let srcImg = inputImg.split("\\");
  img.src = "../img/" + srcImg[srcImg.length - 1];
}

function saveProduct() {
  let inputName = document.getElementById("name").value;
  let inputPrice = document.getElementById("price").value;
  let selectType = document.getElementById("type").value;
  let inputImg = document.getElementById("inputImg").value;
  let arr = JSON.parse(localStorage.getItem("arrProduct"));
  let confirmUpdate = confirm("Bạn có chắc chắn muốn sửa không?");
  if (confirmUpdate) {
    let imgPath = "";
    if (inputImg === "") {
      imgPath = inputImgTemp;
    } else {
      let img = inputImg.split("\\");
      imgPath = "../img/" + img[img.length - 1];
    }
    if (validate(inputName, inputPrice, selectType, imgPath) === "OK") {
      let p = new product(
        generatedId(),
        selectType,
        inputName,
        inputPrice,
        imgPath
      );
      arr[findIndexById(idUpdate)] = p;
      localStorage.removeItem("arrProduct");
      localStorage.setItem("arrProduct", JSON.stringify(arr));
      show(JSON.parse(localStorage.getItem("arrProduct")));
      clearForm();
    } else {
      alert(validate(inputName, inputPrice, selectType, inputImg));
    }
  }
}
