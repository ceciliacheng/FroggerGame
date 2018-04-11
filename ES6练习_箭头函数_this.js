// 使用闭包前
function IceCream() {
  this.scoops = 0;
}

// 为 IceCream 添加 addScoop 方法
IceCream.prototype.addScoop = function() {
  setTimeout(function() {
    this.scoops++;
    console.log("scoop added!");
  }, 500);
};

const dessert = new IceCream();
dessert.addScoop(); //输出NaN

// 使用闭包后
function IceCream() {
  this.scoops = 0;
}

// 为 IceCream 添加 addScoop 方法
IceCream.prototype.addScoop = function() {
  const cone = this; // 设置 `this` 给 `cone`变量
  setTimeout(function() {
    cone.scoops++; // 引用`cone`变量
    console.log("scoop added!");
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop(); //输出1

//改成箭头函数
// 构造函数
function IceCream() {
  this.scoops = 0;
}

// 为 IceCream 添加 addScoop 方法
IceCream.prototype.addScoop = () => {
  // addScoop 现在是一个箭头函数
  setTimeout(() => {
    this.scoops++;
    console.log("scoop added!");
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();
//这段代码因为同一原因而不起作用，即箭头函数从周围上下文中继承了 this 值。
//在 addScoop() 方法外面，this 的值是全局对象。
//因此如果 addScoop() 是箭头函数，addScoop() 中的 this 的值是全局对象。
//这样的话，传递给 setTimeout() 的函数中的 this 的值也设为了该全局对象！
