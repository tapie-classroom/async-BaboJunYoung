async function main() {
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=37.54272888885303&lon=126.96716832937194&appid=1678d5fbe5655c5df4baca85f98cc3ed&lang=kr")
    const jsonData = await data.json();
    console.log(jsonData); // API 가져온거

    let temp = document.getElementById("temp");
    let humidity = document.getElementById("humidity")
    let windDiv = document.getElementById("wind");
    let weatherIcon = document.getElementById("weatherImg");


    console.log(jsonData.weather[0]["icon"])
    weatherIcon.src = "https://openweathermap.org/img/wn/" + jsonData.weather[0]["icon"] + "@2x.png"
    temp.innerHTML = "<div>" + (parseInt(parseFloat(jsonData.main.temp) - 273.15)).toString() + "℃" + "</div>";
    humidity.innerHTML = "<div>" + jsonData.main.humidity + "%" + "</div>";
    windDiv.innerHTML = "<div>" + jsonData.wind.speed + "m/s" + "</div>";

}
main();

const text = document.getElementById("location");
let state = 0;

setInterval(function() {
    if (state == 0) {
        state = 1;
        text.style.color="#FF0000";
    }
    else if (state == 1) {
        state = 2;
        text.style.color="#00FF00";
    }
    else {
        state = 0;
        text.style.color="#0000FF";
    }
}, 80)