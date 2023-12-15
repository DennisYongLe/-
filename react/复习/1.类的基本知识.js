class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  b() {
    console.log(this);
  }
  //   类中可以直接写赋值语句，含义是给Car的实例对象添加一个属性
  a = 1;
  c = () => {
    console.log(this.arrFunc);
  };
}
Car.prototype.arrFunc = () => {
  console.log(this);
};
Car.prototype.arrFunb = function () {
  console.log(this);
};
const car = new Car();
car.c();
