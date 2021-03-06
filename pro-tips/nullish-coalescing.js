// Nullish coalescing operator

// β Bad Code π©
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = "Nothing to display π";
  }
  console.log(message);
}

// β Good Code β¨
// -> (null or undefined) ?? (___μ€ν___)
function printMessage(text) {
  const message = text ?? "Nothing to display π";
  console.log(message);
}

// π¨ Default parameter
// is only for undefined
function printMessage(text = "Nothing to display π") {
  console.log(text);
}

// π¨ Logical OR operator ||
// -> (falsy [0, -0, NaN, false, undefined, null,'',"", ``] ) || (___μ€ν___)
// κ°μ μ§μ  ν λΉνλ κ²½μ°
function printMessage(text) {
  const message = text || "Nothing to display π";
  console.log(message);
}

// μ½λλ₯Ό μ€νν΄μ μ€νλ κ°μ ν λΉνλ κ²½μ°
const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}
function fetchFromServer() {
  return "Hiya from π»";
}

printMessage("Hello");
printMessage(null);
printMessage(undefined);
printMessage(0);
printMessage("");
