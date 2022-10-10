// 需要满足三个条件
/* 
1. 必须有继承（多态的前提）
2. 子类对父类中的方法进行重写
3. 父类引用子类实例
*/

class Shape {
  calcArea() {
    console.log('求取图形面积')
  }
}

class Triangle extends Shape {
  calcArea() {
    console.log('求取三角形的面积')
  }
}

class Circle extends Shape {
  calcArea() {
    console.log('求取圆形的面积')
  }
}

var tri = new Triangle()
var cir = new Circle()

function showArea(shape: Shape) {
  shape.calcArea()
}

showArea(tri)
showArea(cir)
