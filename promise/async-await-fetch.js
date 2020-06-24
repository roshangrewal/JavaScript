// Async / Await / Fetch

global.fetch = require('node-fetch');

async function fetchBootcamp() {
  const res = await fetch(
    'https://bootcamp-rest-api.herokuapp.com/api/v1/bootcamps'
  );
  const results = await res.json();
  console.log(results.data);

  results.data.forEach(bootcamp => {
    console.log(bootcamp.name);
    console.log(bootcamp.description);
  });
}

fetchBootcamp();
