var title = ["Reverse Weave Crew", "Crew Neck T-Shirt", "Reverse Weave Hoodie, C Logo", "Power Blend Fleece Hoodie", "Double C Logo", "We Are Champs", "Random Title Data", "WRLD Juice Title", "Just another random Title", "Last One Maybe"];
var price = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var color = ["Oxford Grey", "Peony Parade Pink", "Surf The Web", "Silver Grey", "Team Red Scarlet", "White", "Venetian Purple", "Navy", "Black", "Burnt Orange", "C Gold", "Cargo Olive", "Carefree Teal", "Deep Blue Water", "Granite Heather", "Running Waves", "Cherry Pie", "Dark Khaki", "Purple Pebble"];
var sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
var quantity = [3, 9, 1, 4, 5, 7, 6, 2, 8, 10];
var styles = ["Style S7468   586270", "Style B7368   583270", "Style S7468   00001"];
const db = require('./database');

const generateColorsArray = () => {
  var array = [];
  while (array.length < 10) {
    var randomColor = Math.floor(Math.random() * color.length);
    array.push(color[randomColor])
  }
  return array;
};

const generateSizesArray = () => {
  var array = [];
  while (array.length < 5) {
    var randomSize = Math.floor(Math.random() * sizes.length);
    array.push(sizes[randomSize])
  }
  return array;
};

const generateData = () => {
  var buildArray = [];
  while (buildArray.length < 100) {
    var buildObject = {};
    var randomTitle = Math.floor(Math.random() * title.length);
    var randomPrice = Math.floor(Math.random() * price.length);
    var randomColor = generateColorsArray();
    var randomSize = generateSizesArray();
    var randomQuantity = Math.floor(Math.random() * quantity.length);
    var randomStyle = Math.floor(Math.random() * styles.length);
    buildObject.Title = title[randomTitle];
    buildObject.Price = price[randomPrice];
    buildObject.Color = randomColor;
    buildObject.Size = randomSize;
    buildObject.Quantity = quantity[randomQuantity];
    buildObject.Style = styles[randomStyle];
    buildArray.push(buildObject);
  }
  return buildArray;
};
const seeder = () => {
  const data = generateData();
  db.create(data);
}
seeder();