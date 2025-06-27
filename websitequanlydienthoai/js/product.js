class product {
  constructor(id, type, name, price, img) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.price = price;
    this.img = img;
  }

  // constructor(){}
  getId = function () {
    return this.id;
  };

  getType = function () {
    return this.type;
  };
  getName = function () {
    return this.name;
  };
  getPrice = function () {
    return this.price;
  };
  getImg = function () {
    return this.img;
  };

  setId(id) {
    this.id = id;
  }
  setType(type) {
    this.type = type;
  }
  setName(name) {
    this.name = name;
  }
  setPrice(price) {
    this.price = price;
  }
  setImg(img) {
    this.img = img;
  }
}
