import { useState, useEffect } from 'react';

const DailyForecast = ({ days }) => {

    const [allDays, setDays] = useState([]);

    useEffect(() => {
        const setWeeklyForecast = () => {
            setDays(days);
        }
        setWeeklyForecast();
    })

    if (allDays) {
        return (
            <div className="weekly">
                {allDays.map((day) => {
                    return (
                        <div className="weekday">
                            <span className="day">{day.dayOfWeek}</span>
                            <img src={day.iconLink} />
                            <span className="temp"> {Math.round( parseInt( day.comfort ) )} </span>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default DailyForecast
