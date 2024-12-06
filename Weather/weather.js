let myInput = document.querySelector("input");
let myBtn = document.querySelector("button");
let myDiv = document.querySelector("div");
myBtn.addEventListener("click", async () => {
  myDiv.innerHTML = "";
  let apiKey = `apikey`;
  let dataFromOutside = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${myInput.value}&appid=${apiKey}`
  );
  let convertedData = await dataFromOutside.json();
  let myCityName = document.createElement("h3");
  let cityTemp = document.createElement("h3");
  let cityClimate = document.createElement("h3");
  let cityWind = document.createElement("h3");
  myCityName.innerHTML = `City Name : ${convertedData.name}`;
  cityTemp.innerHTML = `Temperature : ${(convertedData.main.temp - 273).toFixed(
    2
  )}°C`;
  cityClimate.innerHTML = `Climate : ${convertedData.weather[0].main}`;
  cityWind.innerHTML = `Wind Speed : ${convertedData.wind.speed}`;
  myDiv.append(myCityName, cityTemp, cityClimate, cityWind);
  console.log(convertedData);
});
