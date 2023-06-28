// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8098c51a09msh7d802c07357e1bbp1ca930jsne3569fae3f61',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const tableData = document.getElementById("t1");

const cities = ["Shangai", "New York", "Tokyo" , "Sydney", "Paris", "Moscow"];

const cityData = (function fetchData() {

   cities.map(async city => {
		 const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		 const res = await response.json()
		 return tableData.innerHTML += `<tr><th>${city}</th><td>${res.cloud_pct}</td><td>${res.feels_like}</td><td>${res.humidity}</td><td>${res.max_temp}</td><td>${res.min_temp}</td><td>${res.temp}</td><td>${res.wind_degrees}</td><td>${res.wind_speed}</td></tr>`
	  })
})()


// Main Value

const weather = (city)=>{

	cityname.innerHTML=city;

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
		
		console.log(response)
		
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp;
		temp2.innerHTML = response.temp;
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		// wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
    
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault();
	weather(city.value);
});

weather("Delhi");
    
 