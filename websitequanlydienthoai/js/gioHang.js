function show() {
  let bodyTable = document.getElementById("bodyTable");
  let arr = JSON.parse(localStorage.getItem("arrCart"));
  let str = "";

  if (arr.length <= 0) {
    str = "<tr><td colspan='5' >No products yet</td></tr>";
  } else {
    for (const element of arr) {
      str +=
        "<tr>" +
        "<td style='width: 230px;'><img src='" +
        element.img +
        "' alt=''></td>" +
        "<td style='width: 230px;'>" +
        element.name +
        "</td>" +
        "<td>" +
        Number(element.price).toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        }) +
        "</td>" +
        "<td>" +
        "<input onchange='changeQuantity(" +
        element.id +
        ")' id='inputQuantity" +
        element.id +
        "' type='number' value='" +
        element.quantity +
        "'> " +
        "</td>" +
        "<td id='showTotalAmount" +
        element.id +
        "'>" +
        Number(showTotalAmount(element.quantity, element.price)).toLocaleString(
          "vi-VN",
          {
            style: "currency",
            currency: "VND",
          }
        ) +
        "</td>" +
        "<td><button type='button' class='btn btn-primary' onclick='deleteProduct(" +
        element.id +
        ")" +
        "'>Delete</button></td>" +
        "</tr>";
    }
  }
  bodyTable.innerHTML = str;
}

show();

function showTotalAmount(quantity, price) {
  return parseInt(quantity) * parseInt(price);
}

function showInfoBuy() {
  let slsp = document.getElementById("slSP");
  let showTotalAmount = document.getElementById("totalamount");
  let arr = JSON.parse(localStorage.getItem("arrCart"));
  let totalAmount = 0;
  slsp.innerHTML =
    "<span>Total quantity of products: " + arr.length + " product</span>";
  for (const element of arr) {
    totalAmount += element.price * element.quantity;
  }
  showTotalAmount.innerHTML = `Total amount: ${Number(
    totalAmount
  ).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })}`;
}
showInfoBuy();

function thanhtoan() {
  let arrCart = [];
  localStorage.removeItem("arrCart");
  localStorage.setItem("arrCart", JSON.stringify(arrCart));
  show();
  showInfoBuy();
}

function deleteProduct(id) {
  let confirmDelete = confirm("Bạn có chắc chắn muốn xoá không?");
  if (confirmDelete) {
    let arr = JSON.parse(localStorage.getItem("arrCart"));
    arr.splice(findIndexById(id), 1);
    console.log(arr);
    localStorage.removeItem("arrCart");
    localStorage.setItem("arrCart", JSON.stringify(arr));
    show();
    showInfoBuy();
  }
}

function findIndexById(id) {
  let arr = JSON.parse(localStorage.getItem("arrCart"));
  for (let i = 0; i < arr.length; i++) {
    if (id == arr[i].id) return i;
  }
  return -1;
}

function changeQuantity(idProduct) {
  let inputQuantity = document.getElementById(
    "inputQuantity" + idProduct
  ).value;
  let arr = JSON.parse(localStorage.getItem("arrCart"));
  let index = findIndexById(idProduct);
  if (inputQuantity > 0) {
    arr[index].quantity = parseInt(inputQuantity);
  } else {
    inputQuantity = 1;
    arr[index].quantity = 1;
  }
  document.getElementById("showTotalAmount" + idProduct).innerHTML =
    "<p>" +
    Number(
      showTotalAmount(arr[index].quantity, arr[index].price)
    ).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    }) +
    "</p>";
  localStorage.removeItem("arrCart");
  localStorage.setItem("arrCart", JSON.stringify(arr));
  showInfoBuy();
}
