// 1 => Square star pattern in javascript
function SqPatterns(n) {
  let string = "";
  //String variable are use here to store the pattern

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      string = string + " * ";
    }
    // newline after each row
    string = string + "\n";
  }
  // printing the string
  console.log(string);
}
// console.log(SqPatterns(4));

// 2 => Hollow Square Pattern
function printPartialRow(n) {
  let string = "";
  string = string + " * ";
  for (let i = 0; i < n; i++) {
    string = string + " ";
  }
  string = string + " * ";
  console.log(string);
}
function Printfullrow(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    star = star + " * ";
  }
  console.log(star);
}

function hollowSq(n) {
  Printfullrow(n);
  for (let i = 0; i < n; i++) {
    printPartialRow(n);
  }
  Printfullrow(n);
}
hollowSq(5);
