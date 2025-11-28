import './Weather.css';
import React,{useEffect, useState,useRef} from 'react';
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import night_clear_icon from "../Assets/night.svg";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png";
import Mist_icon from "../Assets/Mist.png";
import Storm_icon from "../Assets/Storm.png";

function Weather() {
    const inputRef=useRef();
    const [data,setdata]= useState(0);
    const allicon = {
  "01d": clear_icon,
  "01n": night_clear_icon,
  "02d": cloud_icon,
  "02n": cloud_icon,
  "03d": cloud_icon,
  "03n": cloud_icon,
  "04d": cloud_icon,
  "04n": cloud_icon,
  "09d": drizzle_icon,
  "09n": drizzle_icon,
  "10d": rain_icon,
  "10n": rain_icon,
  "11d": Storm_icon,
  "11n": Storm_icon,
  "13d": snow_icon,
  "13n": snow_icon,
  "50d": Mist_icon,    
  "50n": Mist_icon
}
    const search = async(city)=>{
        if (city === "") {
        alert("Error: You must enter a city name before searching.");
       return;
       }
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}` 
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const icon = allicon[data.weather[0].icon]||clear_icon;
            if (!response.ok) {
                alert("❌ City not found or invalid request.");
                return;
            }
            setdata({
                humidity:data.main.humidity,
                windSpeed:data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name,
                icon : icon,
            })
        }catch(error){
            setdata(0);
            alert("Error fetching weather data:", error);
        }
    } 
    useEffect(()=>{
        search("JAMMU");
    },[])
  return (
    <div className="Weather">
       <div className='search-bar'>
        <input ref={inputRef} type="text" placeholder='Search'/>
        <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)}/>
       </div>
       {data?<>
       <img src={data.icon} alt="" className='Weather-icon'/>
       <p className='temperature' >{data.temperature}°c</p>
       <p className='location' >{data.location}</p>
       <div className='weather-data'>
        <div className="col">
            <img src={humidity_icon} alt="" />
            <div>
                <p>{data.humidity}</p>
                <span>Humidity</span>
            </div>
        </div>
        <div className="col">
            <img src={wind_icon} alt="" />
            <div>
                <p>{data.windSpeed}</p>
                <span>Wind Speed</span>
            </div>
        </div>
       </div>
       </>:<></>}
    </div>
  );
}

export default Weather;
