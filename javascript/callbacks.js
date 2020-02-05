// Syntax for callbacks

// This function uses another function to trasnform an array
const map = function(array, transform){
  const copy = []
  for(const element of array){
    copy.push(transform(element))
  }
  return copy;
}

const square = function(x){
  return x**2;
}

const numbers = [1,2,3,4,5];


console.log(map(numbers, square));
console.log(numbers);

console.log(map(numbers,x=>x**2))
