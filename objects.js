// Object and array syntax

// Object literal
const point = {x: 1, y:2};
console.log(point);

console.log(point.x);

point.x = 3;

const circle = {
  center: point,
  radius: 4
};

console.log(circle.center)
console.log(circle.radius)
