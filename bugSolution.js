function myFunction() {
  let x = 10;
  if (true) {
    //Avoid shadowing by using a different variable name
    let y = 20; 
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10
} 
//Alternatively, you could use var, which would result in x being 20 in both cases. However, using var is generally discouraged in modern JS due to potential hoisting issues.