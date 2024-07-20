let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 done!");
  }, 1500);
  resolve();
});

promise1.then(() => {
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 2 done!");
    }, 4500);
    resolve();
  });

  promise2.then(() => {
    let promise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Promise 3 done!");
      }, 3000);
      resolve();
    });
  });
});
