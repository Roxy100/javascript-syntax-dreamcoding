/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
{
  const person1 = {
    name: "Roxy",
    job: {
      title: "Frotend Developer",
      manager: {
        name: "Bob",
      },
    },
  };
  const person2 = {
    name: "Bob",
  };

  // π©π©π©π©π©π©
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1); // Bob
    // printManager(person2); μ€νμ΄ μλ¨.
  }
  // π©π©π©
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
            ? person.job.manager.name
            : undefined
          : undefined
      );
    }
    printManager(person1); // Bob
    printManager(person2); // undefined
  }
  // π©
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1); // Bob
    printManager(person2); // undefined
  }
  // β¨ (? μ¬μ©νκΈ°)
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1); // Bob
    printManager(person2); // undefined
  }
}

/**
 * Nullish Coalescing Operator (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
{
  // Logical OR operator
  // false : flase, '', 0, null, undefined
  {
    const name = "Roxy";
    const userName = name || "Guest";
    console.log(userName); // Roxy
  }

  {
    const name = null;
    const userName = name || "Guest";
    console.log(userName); // Guest
  }

  // π©
  {
    const name = "";
    const userName = name || "Guest";
    console.log(userName); // Guest

    const num = 0;
    const message = num || "undefined";
    console.log(message); // undefined
  }
  // β¨ (?? μ¬μ©νκΈ°)
  {
    const name = "";
    const userName = name ?? "Guest";
    console.log(userName); // ν λΉμ΄μλ κ°

    const num = 0;
    const message = num ?? "undefined";
    console.log(message); // 0
  }
}
