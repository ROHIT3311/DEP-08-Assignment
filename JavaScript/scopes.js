// function outer() {
//   const outerVar = "Outer";
//   function inner() {
//     const outerVar = "In Inner";
//     console.log("in Inner fn : ", outerVar);
//   }

//   inner();
//   console.log("in Outer Fn : ", outerVar);
// }

// outer();

function x() {
  let a = 1;
  console.log("in x : ", a);

  function y() {
    // let a = 2;
    console.log("in y : ", a);

    function z() {
      //   let a = 3;
      console.log("in z : ", a);
    }
    z();
  }
  a = 99;
  y();
}

x();
