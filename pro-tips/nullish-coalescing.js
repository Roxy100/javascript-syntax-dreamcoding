// Nullish coalescing operator

// ❌ Bad Code 💩
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = "Nothing to display 😜";
  }
  console.log(message);
}

// ✅ Good Code ✨
// -> (null or undefined) ?? (___실행___)
function printMessage(text) {
  const message = text ?? "Nothing to display 😜";
  console.log(message);
}

// 🚨 Default parameter
// is only for undefined
function printMessage(text = "Nothing to display 😜") {
  console.log(text);
}

// 🚨 Logical OR operator ||
// -> (falsy [0, -0, NaN, false, undefined, null,'',"", ``] ) || (___실행___)
// 값을 직접 할당하는 경우
function printMessage(text) {
  const message = text || "Nothing to display 😜";
  console.log(message);
}

// 코드를 실행해서 실행된 값을 할당하는 경우
const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}
function fetchFromServer() {
  return "Hiya from 💻";
}

printMessage("Hello");
printMessage(null);
printMessage(undefined);
printMessage(0);
printMessage("");
