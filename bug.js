function myFunction() {
  let x = 10;
  if (true) {
    let x = 20; 
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10, this may be unexpected if you thought it would be 20
}