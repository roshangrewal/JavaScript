// const fetch = require('node-fetch');

const promise1 = Promise.resolve('Hello from promise 1');
const promise2 = 20;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, 'GoodBye!')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
  res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then(val =>
  console.log(val)
);
