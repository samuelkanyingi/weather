const btn = document.getElementById('btn');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const errorMessage = document.getElementById("errorMessage");
const result = document.getElementById("result");
const loading = document.getElementById("loading");
console.log(loading);
searchBtn.addEventListener("click", function searchLocation() {
    const query = searchInput.value.trim();
    if (query) 
        getWeather(query)
    else 
        errorMessage.textContent = "Enter a location"
})
btn.addEventListener("click", function message(e){
    getWeather(query);
})
//const loading = document.createElement("p");
//loading.textContent = "Loading...";
//loading.classList.add("loading");
async function getWeather(searchLocation){
    errorMessage.textContent = ""
    result.innerHTML= ""

    API_KEY = "GK4JZS3AF4L89A4JN9SLG5FX3";
    
    loading.style.display = "block";
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchLocation}?key=GK4JZS3AF4L89A4JN9SLG5FX3`, {mode: 'cors'});
        const data = await response.json();
        console.log(data);
        const timezone =  document.createElement('p');
        const description = document.createElement('p');
        const address = document.createElement('p');
        console.log("timezone class", timezone);
        timezone.textContent = `TimeZone: ${data.timezone}`
        timezone.classList.add('weatherData');
        description.textContent = `Weather is: ${data.description}`;
        description.classList.add('weatherData');
        address.textContent = `Location is: ${data.address}`;
        address.classList.add("weatherData");
        //result.innerHTML += data.timezone + data.description;
        //result.appendChild(loading)
        result.appendChild(timezone)
        result.appendChild(description)
        result.appendChild(address)
    }  
    catch(error) {
        console.error("Failed to fetch data...", error);
        errorMessage.textContent = "failed to fetch";
    }
    finally {
        loading.style.display = "none";
        console.log(loading + "finally block");        
    }
}
console.log("hello weather api");