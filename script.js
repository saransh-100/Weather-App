const cities = ["Canberra", "Melbourne", "Brisbane", "Perth", "Adelaide", "Sydney", "Hobart", "Darwin", "Gold Coast", "Sunshine"];
const apiKey = "31e7f7bbfamsh0d7978de4503d48p18df95jsnbd61bf7ca8fa";
const container = document.getElementById("weather-container");
const tableBody = document.getElementById("weather-table");

const getWeather = (city) => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
  const options = {
      method: "GET",
      headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
  };

  fetch(url, options)
      .then(response => response.json())
      .then(response => {
        const cityImages = {
          "Sydney": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "Melbourne": "https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "Brisbane": "https://images.unsplash.com/photo-1566734904496-9309bb1798ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "Perth": "https://images.unsplash.com/photo-1524586410818-196d249560e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVydGh8ZW58MHx8MHx8fDA%3D",
          "Adelaide": "https://images.unsplash.com/photo-1556628057-2196b9ef2233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRlbGFpZGV8ZW58MHx8MHx8fDA%3D",
          "Gold Coast": "https://images.unsplash.com/photo-1591701729564-3b5325d5a4bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZCUyMGNvYXN0fGVufDB8fDB8fHww",
          "Sunshine": "https://images.unsplash.com/photo-1560341175-08cc06605545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Vuc2hpbmUlMjBjb2FzdHxlbnwwfHwwfHx8MA%3D%3D",
          "Hobart": "https://images.unsplash.com/photo-1582539934730-cdf1770948d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvYmFydHxlbnwwfHwwfHx8MA%3D%3D",
          "Darwin": "https://images.unsplash.com/photo-1552025249-2cecdd0460ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcndpbnxlbnwwfHwwfHx8MA%3D%3D"
      };
      
      let imgURL = "https://images.unsplash.com/photo-1510546020578-a35ae9fcfb0f?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

      if (cityImages[response.location.name]) {
          imgURL = cityImages[response.location.name];
      }
        const weatherCard = `
        <div class="col">
            <div class="card h-100">
                <img src="${imgURL}" class="card-img-top" alt="${city} Weather" style="width: 100%; height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${response.location.name}, ${response.location.country}</h5>
                    <p class="card-text">
                        <strong>Temperature:</strong> ${response.current.temp_c}°C<br>
                        <strong>Humidity:</strong> ${response.current.humidity}%<br>
                        <strong>Wind Speed:</strong> ${response.current.wind_kph} km/h<br>
                        <strong>Latitude:</strong> ${response.location.lat}<br>
                        <strong>Longitude:</strong> ${response.location.lon}<br>
                        <strong>Timezone:</strong> ${response.location.tz_id}<br>
                        <strong>Local Time:</strong> ${response.location.localtime}
                    </p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated: ${response.current.last_updated}</small>
                </div>
            </div>
        </div>
    `;
  
    const tableRow = `
        <tr>
                    <td> ${response.location.name} </td>
                    <td> ${response.location.country} </td>
                    <td> ${response.current.temp_c} </td>
                    <td> ${response.current.humidity} </td>
                    <td> ${response.current.wind_kph} </td>
                    <td> ${response.location.lat} </td>
                    <td> ${response.location.lon} </td>
                    <td> ${response.location.tz_id} </td>
                    <td> ${response.location.localtime} </td>
                </tr>
    `
    container.innerHTML += weatherCard;
    tableBody.innerHTML += tableRow;
})
.catch(err => console.error("API Error:", err.message));
};

cities.forEach(city => {
  getWeather(city);
});
