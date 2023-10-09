const restaurant = {
  name: "PetPooja",
  location: "Rewa",
  categories: ["Indian", "Chineese", "Italian"],
  starterMenu: ["MaslaPapad", "Manchurian", "Roll"],
  mainMenu: ["Paneer", "Roti", "Kofta"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//destructring
const [first, second] = restaurant.categories;
console.log(first, second);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//nested
const arr = [4, 5, [6, 8]];
const [a, , [b, c]] = arr;
console.log(a, b, c);

//questions
//when we are passing object as an argument then we need to destructre it.
const person = {
  firstName: "Prabhav",
  lastName: "Sohgaura",
};
function displayName({ firstName, lastName }) {
  console.log(`He is ${firstName} ${lastName}`);
}
displayName(person);

//q2
const colors = ["white", "yellow", "orange", "green"];
const [firstColor, secondColor, ...otherColors] = colors;
console.log(firstColor, secondColor, otherColors);

//new "at" method
const arrat = [2, 4, 6, 8];
console.log(arrat.at(-1));
console.log(arrat.at(1));
console.log(arrat.splice(-1));
console.log(arrat.length - 1);

//forof loop for iterating over the array
const movements = [100, 200, -30, -40, 500, 300, -600];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited Rs.${movement}`);
  } else {
    console.log(`You withdrew Rs.${movement}`);
  }
}

//in the forof loop to get the current index with current element

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited Rs.${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew Rs.${movement}`);
  }
}
console.log("----- for each method -----");
//forEach method --- for getting the current index and element
movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1} --- You deposited Rs.${mov}`);
  } else {
    console.log(`Movement ${i + 1} --- You withdrew Rs.${mov}`);
  }
});
