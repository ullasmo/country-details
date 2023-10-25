const cn = prompt("Enter a country name");

const request = new XMLHttpRequest();
const url = `https://restcountries.com/v2/name/${cn}`;
console.log(url);
request.open("GET", url);
request.send();

const container = document.querySelector(".container");

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  for (let i = 0; i < data.length; i++) {
    let nuData = data[i];
    console.log(nuData);
    let popu;
    if (nuData.population >= 1000000) {
      popu = (nuData.population / 1000000).toFixed(1) + " M";
    } else {
      popu = (nuData.population / 1000).toFixed(1) + " K";
    }
    const box = document.createElement("div");
    box.insertAdjacentHTML(
      "beforeend",
      `<img src="${nuData.flags.png}" alt="flag" />
    <h3 class="name">${nuData.name}</h3>
    <h5 class="continent">${nuData.region}</h5>
    <p class="population">👨‍👩‍👧‍👦 : ${popu}</p>
    <p class="laug">🗣 : ${nuData.languages[0].name}</p>
    <p class="currency">💵 : ${nuData.currencies[0].name}</p>`
    );

    container.appendChild(box);
  }
});
