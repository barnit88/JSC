/**
 *      ##### Object.Create #######
 * 
 *  Object.Create takes an object and sets the object to the 
 *  prototype of an another object.
 * 
 * 
 */

const car = {
    introduce : function(){
        console.log(this.Introduction);
    }
}

/**
 * Here Below We have created an object using an object.Create
 * The below code creates an kia object and assigns the car object 
 * as the prototype of the kia object.
 */
let kia = Object.create(car);
kia.Introduction = "Hello I am KIA car";
kia.introduce();

/**
 * Here Below We have created an object using an object.Create
 * The below code creates an creta object and assigns the car object 
 * as the prototype of the creta object.
 */
let creta = Object.create(car);
creta.Introduction = "Hello I am CRETA car";
creta.introduce();

let newCar = {
    name : "Volvo Car",
    model : "2021 Model"
}
console.log(newCar);
newCar = Object.create(car);

console.log(newCar);

function Tesla(){
    this.model = "Tesla x";
    this.Year = "2020";

}

var teslaX = new Tesla();
console.log(teslaX);
delete teslaX;
console.log(teslaX);



function Product(name, price) {
    this.name = name;
    this.price = price;
    // console.log(this.category);
  }
  
  function Food(name, price) {
    this.category = 'food';
    Product.call(this, name, price);
}
  
//   console.log(new Food('cheese', 5).name);
//   console.log(Product.call(new Food()));
var test = Product.call(new Food());
console.log(new Food());
//   console.log(Product);

