
const cities = [
    { name: "Addis Ababa", celsius: 22 },
    { name: "New York", celsius: 5 },
    { name: "China", celsius: -3 },
    { name: "Seoul", celsius: 18 },
    { name: "Dubai", celsius: 38 },
    { name: "Japan", celsius: 15 },
    { name: "Brazil", celsius: 28 }
  ];
  
  
  const toFahrenheit = c => (c * 9 / 5 + 32).toFixed(1);
  
 
  const getAdvisory = c => {
    if (c <= 0) return "Freezing ❄️";
    if (c <= 10) return "Cold 🥶";
    if (c <= 20) return "Mild 🌤️";
    if (c <= 30) return "Warm ☀️";
    return "Hot 🔥";
  };
  
  
  const dashboard = document.getElementById("dashboard");
  
  cities.forEach(city => {
    const fahrenheit = toFahrenheit(city.celsius);
    const advisory = getAdvisory(city.celsius);
  
    
    dashboard.innerHTML += `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card shadow-sm h-100">
          <div class="card-body text-center">
            <h5 class="card-title">📍 ${city.name}</h5>
            <p class="card-text fs-5">🌡️ ${city.celsius}°C / ${fahrenheit}°F</p>
            <span class="badge bg-primary fs-6">${advisory}</span>
          </div>
        </div>
      </div>
    `;
  });
