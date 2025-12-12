document.getElementById("btn").onclick = function () {
  let num = document.getElementById("ip").value.trim();
  const output = document.getElementById("output");

  // Clear old result
  output.innerText = "";

  // Validate: check empty & check number
  if (num === "" || isNaN(Number(num))) {
    output.innerText = "Please enter a valid number!";
    return;
  }

  num = Number(num);

  // Promise 1 → wait 2 sec → show input
  new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })

    // Promise 2 → multiply by 2 → wait 2 sec
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value * 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })

    // Promise 3 → subtract 3 → wait 1 sec
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value - 3;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Promise 4 → divide by 2 → wait 1 sec
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value / 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Promise 5 → add 10 → wait 1 sec → final result
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const finalResult = value + 10;
          output.innerText = `Final Result: ${finalResult}`;
          resolve(finalResult);
        }, 1000);
      });
    });
};
