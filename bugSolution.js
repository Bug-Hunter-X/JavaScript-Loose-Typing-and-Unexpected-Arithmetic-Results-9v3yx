function foo(a,b){
  // Type checking and conversion
  a = typeof a === 'number' ? a : parseFloat(a) || 0; //Handle NaN
  b = typeof b === 'number' ? b : parseFloat(b) || 0;
  return a + b; //Explicit Addition
}
console.log(foo(1,2)); //3
console.log(foo(1,"2")); //3
console.log(foo(true,false)); //1
console.log(foo(null,undefined)); //0
console.log(foo([1,2],[3,4])); //NaN //This cannot be solved directly without further instructions.