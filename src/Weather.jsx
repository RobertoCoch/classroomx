import { useState, useEffect } from "react";

const Weather = () => {
    const [weather, setWeather] = useState(null); 
    const API_KEY = "9f75ffa18f605cea273459b731774215";
    const CITY = "Chetumal";

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((error) => console.error("Error al obtener el clima:", error));
    }, []);

    return (
        <>
            <div>
                <h2>Clima en {CITY}</h2>
                {weather ? (
                    <div>
                        <p>Temperatura: {weather.main.temp}°C</p>
                        <p>Condición: {weather.weather[0].description}</p>
                    </div>
                ): (
                  <p>Cargando...</p>
                )}
            </div>
        </>
    );
};

export default Weather; 



