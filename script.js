let products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];

let printProducts = (products) => {
  for (let i = 0; i < products.length; i++) {
    document.write(
      "Name: " +
        products[i].name +
        ", Calories: " +
        products[i].calories +
        ", Color: " +
        products[i].color +
        ", Sold: " +
        products[i].sold +
        "</br>"
    );
  }
};
let soldb = (colaA, colaB) => {
  colaA.sold > colaB.sold
    ? 1
    : colaA.sold === colaB.sold
    ? 0
    : colaA.sold < colaB.sold
    ? -1

};
let solda = () => {
  document.write("compareSold<br>");
  products.sort(soldb);
  printProducts(products);
};
let colorb = (colaA, colaB) => {
  colaA.color > colaB.color
    ? 1
    : colaA.color === colaB.color
    ? 0
    : colaA.color < colaB.color
    ? -1
   
};
let colora = () => {
  document.write("compareColor<br>");
  products.sort(colorb);
  printProducts(products);
};
let caloriesb = (colaA, colaB) => {
  colaA.calories > colaB.calories
    ? 1
    : colaA.calories === colaB.calories
    ? 0
    : colaA.calories < colaB.calories
    ? -1
    
};
let caloriesa = () => {
  document.write("compareCalories<br>");
  products.sort(caloriesb);
  printProducts(products);
};
let namesb = (colaA, colaB) => {
  colaA.names > colaB.names
    ? 1
    : colaA.names === colaB.names
    ? 0
    : colaA.names < colaB.names
    ? -1
   
};
let namesa = () => {
  document.write("compareName<br>");
  products.sort(namesb);
  printProducts(products);
};

let soldc = (colaA, colaB) => {
  colaA.sold > colaB.sold
    ? -1
    : colaA.sold === colaB.sold
    ? 0
    : colaA.sold < colaB.sold
    ? 1
    
};
let soldd = () => {
  document.write("compareSold<br>");
  products.sort(soldc);
  printProducts(products);
};
let colorc = (colaA, colaB) => {
  colaA.color > colaB.color
    ? -1
    : colaA.color === colaB.color
    ? 0
    : colaA.color < colaB.color
    ? 1
    
};
let colord = () => {
  document.write("compareColor<br>");
  products.sort(colorc);
  printProducts(products);
};
let caloriesc = (colaA, colaB) => {
  colaA.calories > colaB.calories
    ? -1
    : colaA.calories === colaB.calories
    ? 0
    : colaA.calories < colaB.calories
    ? 1
    
};
let caloriesd = () => {
  document.write("compareCalories<br>");
  products.sort(caloriesc);
  printProducts(products);
};
let namesc = (colaA, colaB) => {
  colaA.names > colaB.names
    ? -1
    : colaA.names === colaB.name
    ? 0
    : colaA.names < colaB.names
    ? 1
    
};

let namesd = () => {
  document.write("compareName<br>");
  products.sort(namesc);
  printProducts(products);
};
