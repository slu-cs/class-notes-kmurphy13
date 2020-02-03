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

// Array
const languages = ['HTML', 'CSS', 'JS']
console.log(languages)

// Accessing length and elements
for(let i=0; i < languages.length; i++){
  console.log(languages[i]);
}

// Changing elements
languages[2] = 'JavaScript'

languages.push('MongoDB')

for (const lang of languages){
  console.log(lang)
}

const avg = function(a,b) {
  return (a + b) / 2;
};

const print = function(a,b) {
  console.log(`a=${a}, b=${b}`);
};

// Undefined values
const result = print(7,8);
console.log(result); // Logs undefined
print(9,10); // 9, undefined
print() // undefined, undefined
