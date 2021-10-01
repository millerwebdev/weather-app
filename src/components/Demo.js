import { useState, setState, useEffect } from 'react';

import DailyForecast from './subcomponents/DailyForecast';
import {FaSun} from 'react-icons/fa';

import clouds from './../imgs/clouds.jpg';

const Demo = () => {
    const endpoint = 'https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather';


    const [allData, setData] = useState(false);
    const [dailyForecast, setDaily] = useState([]);

    //Fetch Data from API
    const fetchData = async () => {
        const res = await fetch(endpoint);
        const resData = await res.json();
        return resData;
    }

    useEffect(() => {
        const getAllData = async () => {
            try {
                const dataFromAPI = await fetchData();
                setData(dataFromAPI);
                setDaily(dataFromAPI.daily);
            } catch (error) {
                console.log(error);
            }
        }
        getAllData();
    }, [])

    const bgImg = 'url(' + clouds + ')';

    if (allData) {
        
        const test = () => {
            (
                <div className="weekly">
                    <span class="day">{allData.daily[0].weekday}</span>
                    <img src={allData.daily[0].iconLink} />
                    <span class="temp"> {allData.daily[0].comfort} </span>
                </div>
            )
        }

        const today = new Date(allData.today.utcTime);
        const day = today.toLocaleDateString('default', { weekday: 'short' });
        const month = today.toLocaleDateString('default', { month: 'short' });
        const dayNum = today.getDate();
        const time = today.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });
        
        const convertTemp = ( time ) => {
            return Math.round( parseInt( time ) )
        }

        return (
            <section className="demo-app" style={{backgroundImage: bgImg}} >
                <div className="app-wrap" >

                    <p className="time">{time}</p>
                    <h2 className="location">{allData.today.city}, {allData.today.state}</h2>
                    <p className="date">
                        {day}, {month} {dayNum}
                    </p>
                    <h3 className="main-temp">{convertTemp( allData.today.comfort ) } &deg;</h3>
                    <p className="desc">{allData.today.description}</p>
                    <div className="temps">
                        <span> <strong>L : </strong> {allData.today.lowTemperature} &deg;</span>
                        <span> <strong>H : </strong> {allData.today.highTemperature} &deg;</span>
                    </div>

                    <DailyForecast days={ dailyForecast } />
                    
                </div>
            </section>
        )
    } else {
        return (
            <section className="demo-app" style={{backgroundImage: bgImg}}>
                <div className="app-wrap loading">
                    <span className="loader">
                        <span>{ <FaSun className="sun" /> }</span>
                        <span className="text">Loading</span>
                    </span>
                </div>
            </section>
        )
    }




}

export default Demo

// GET THIS LATER ---------------------------------------------------------------------
// const getDaily = () => {
//     let output = [];
//     allData.daily.forEach( (day) => {
//         output.push( day )
//     } )
//     return output;
// }

// console.log( getDaily() )
