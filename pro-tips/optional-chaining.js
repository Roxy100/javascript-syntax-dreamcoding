// Optional Chaining
const bob = {
  name: "Julia",
  age: 20,
};
const anna = {
  name: "Julia",
  age: 20,
  job: {
    title: "Software Engineer",
  },
};

// ❌ Bad Code 💩
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// ✅ Good Code ✨
function displayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

// ✅ Good Code ✨
// person.job?title에서 job이 없을 때 undefined --> 그래서 nullish polishing이 가능함.
function displayJobTitle(person) {
  const title = person.job?.title ?? "No Job Yet 🔥";
  console.log(title);
}

displayJobTitle(bob);
displayJobTitle(anna);
