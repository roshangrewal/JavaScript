// to get WOEID https://www.findmecity.com/

function getWeather(woeid) {
  fetch(
    `http://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
  )
    .then(result => {
      return result.json();
    })
    .then(data => {
      // console.log(data.consolidated_weather);
      const today = data.consolidated_weather[0];
      console.log(
        `Temperatures today in ${
          data.title
        } stay between ${today.min_temp.toFixed(
          2
        )} and ${today.max_temp.toFixed(2)}`
      );
    })
    .catch(error => console.log(error));
}

// converting getWeather fn into async/await fn
async function getWeatherAW(woeid) {
  try {
    const result = await fetch(
      `http://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
    );
    const data = await result.json();
    const tomorrow = data.consolidated_weather[1];
    console.log(
      `Temperatures tomorrow in ${
        data.title
      } stay between ${tomorrow.min_temp.toFixed(
        2
      )} and ${tomorrow.max_temp.toFixed(2)}.`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

getWeather(2295414);

let dataHyd;
getWeatherAW(2295414).then(data => {
  dataHyd = data;
  console.log(dataHyd);
});
