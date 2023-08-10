const loadWaither = cityName => {
    const Api_key = `e73f187ad7159c983df2f87fb95a38e5`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Api_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => placeWeather(data))
        .catch(error => {
            alert('please Input a city name')
        })
}
// fuction for ser inner text fast
const setInnerTextById = (id, text) => {
    const tempareture = document.getElementById(id);
    tempareture.innerText = text;
}
const placeWeather = (data) => {
    console.log(data)
    setInnerTextById('Tampareture', data.main.temp);
    setInnerTextById('location', data.name);
    setInnerTextById('setuation', data.weather[0].main)

}
document.getElementById('searchbtn').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value;
    loadWaither(searchValue)
})
loadWaither('Dhaka');




