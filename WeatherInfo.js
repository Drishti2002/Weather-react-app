import React, { useState, useEffect } from "react";
import "./css/WeatherInfo.css";

const WeatherInfo = () => {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [emoji, setEmoji] = useState(null);
    console.log(data);
    console.log(search);

    

    const handleData = async (e) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c50fcf1487ac9c26b6d533aab1f2fa42`)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setSearch("");
                console.log(result);
                if(result.weather){
    
                    if(result.weather[0].main==="Clouds"){
                        setEmoji("fa-cloud")
                    }
                    else if(result.weather[0].main==="Clear"){
                        setEmoji("fa-cloud-sun")
                    }
                    else if(result.weather[0].main==="Thunderstrom"){
                        setEmoji("fa-poo-strom")
                    }
                    else if(result.weather[0].main==="Drizzle"){
                        setEmoji("fa-cloud-rain")
                    }
                    else if(result.weather[0].main==="Rain"){
                        setEmoji("fa-cloud-showers-heavy")
                    }
                    else if(result.weather[0].main==="Snow"){
                        setEmoji("fa-snow-flake")
                    }
                    else{
                        setEmoji("fa-smog")
                    }
                }
            })
            

            
    }
    useEffect(() => {
        let start = "mumbai";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${start}&units=metric&appid=c50fcf1487ac9c26b6d533aab1f2fa42`)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setSearch("");
                console.log(result);
                console.log(result.weather[0].main);

                if(result.weather){
    
                    if(result.weather[0].main==="Clouds"){
                        setEmoji("fa-cloud")
                    }
                    else if(result.weather[0].main==="Clear"){
                        setEmoji("fa-cloud-sun")
                    }
                    else if(result.weather[0].main==="Thunderstrom"){
                        setEmoji("fa-poo-strom")
                    }
                    else if(result.weather[0].main==="Drizzle"){
                        setEmoji("fa-cloud-rain")
                    }
                    else if(result.weather[0].main==="Rain"){
                        setEmoji("fa-cloud-showers-heavy")
                    }
                    else if(result.weather[0].main==="Snow"){
                        setEmoji("fa-snow-flake")
                    }
                    else{
                        setEmoji("fa-smog")
                    }
                }
            })
            
    }, []);

    function convertHMS(value) {
        console.log(value);
        var sec = value;
        var date = new Date(sec * 1000);
        var timestr = date.toLocaleTimeString();
        return timestr;

    }
    
    



    return (
        <>
            <div className="container" >
                <div className="row mt-5">
                    <div className="col-10 col-md-6 mx-auto">
                        <div className="card text-white text-center border-0 weather">
                            <img className="card-img" src="https://source.unsplash.com/600x900/?nature,water" />
                            <div className="card-img-overlay">
                                <div className="input-group mb-3 mt-2">
                                    <input type="text" className="form-control" name="search" placeholder="Search city" onChange={(e) => setSearch(e.target.value)} value={search} />
                                    <button className="btn" onClick={handleData} ><i className="fas fa-search"></i></button>
                                </div>
                                <div className="card bg-dark bg-opacity-50 mx-auto info mt-5">
                                    <div className="card-body">
                                        {data.cod==="404" || data.cod==="400"?(data.message):(<div><div className="location fs-3">{data.name ? data.name : ""}</div>
                                            <div className="mt-2"><i className={`fas ${emoji} fa-4x `}></i></div>

                                            <div className=""><span className="fs-3 fw-bold">{data.main ? data.main.temp : ""}&deg;C</span> | {data.weather ? data.weather[0].main : ""}</div>

                                            <div className="fw-bold ms-4 mt-3 mb-4">Weather Info</div>
                                            <div className="d-flex flex-wrap justify-content-around align-items-center">
                                                <div className="d-flex flex-row">
                                                    <i className="fas fa-sun fs-4"></i>
                                                    <div className="d-flex flex-column ms-2">{data.sys ? convertHMS(parseInt(data.sys.sunrise)) : ""}
                                                        <span>Sunrise</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <i className={"fas fa-tint fs-4"}></i>
                                                    
                                                    <div className="d-flex flex-column ms-2">{data.main ? data.main.humidity : ""}
                                                        <span>Humidity</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap justify-content-around align-items-center mt-4 mb-3">
                                                <div className="d-flex flex-row">
                                                    <i className="fas fa-wind fs-4"></i>
                                                    <div className="d-flex flex-column ms-2">{data.wind ? data.wind.speed : ""}
                                                        <span>Wind</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <i className="fas fa-sign-in-alt fs-4"></i>
                                                    <div className="d-flex flex-column ms-2">{data.main ? data.main.pressure : ""}
                                                        <span>Pressure</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
export default WeatherInfo;