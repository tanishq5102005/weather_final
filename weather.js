async function getWeather() {
    const city=document.getElementById("ip").value;
    const apiKey="7977443501a5b4fe74218941ea7187e2";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
    document.getElementById("result").innerHTML="Loading...";
    document.getElementById("result").style.color="black";

    const response= await fetch(url);
    if(!response.ok) throw new Error("City not found");
    const data=await response.json();

    const res= `<h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>

      
`;

    document.getElementById("result").innerHTML=res;
    document.getElementById("result").style.color="black";
    document.getElementById("ip").value="";
}
catch(error)
{
    document.getElementById("result").innerHTML="Error";
    document.getElementById("result").style.color="red";
}

}













