import axios from "axios"
import React, { useState, useEffect } from "react"

import "./Calendar.css"

const Calendar = () => {

    const [dates, setDates] = useState([])

    useEffect(() => {
        
        const fetchDates = async () => {
          const { data } = await axios.get("/availability")

          setDates(data)
        }

        fetchDates()
    },[])

    return (
        <div className="container">
            

            <section className="timezone">Your timezone: GMT +00:00</section>

            <div className = "day-container">
                <div className="day-item">11th<br/> Mon</div>
                <div className="day-item">12th <br/>Tue</div>
                <div className="day-item">13th <br/>Wed</div>
                <div className="day-item">14th <br/>Thur</div>
                <div className="day-item">15th<br/> Fri</div>
                <div className="day-item">16th <br/>Sat</div>
                <div className="day-item">17th <br/>Sun</div>
            
            </div>

            <div className = "hour-container">
                <button className="hour-item">08:00</button>
                <button className="hour-item">09:00</button>
                <button className="hour-item">10:00</button>
                <button className="hour-item">11:00</button>
                <button className="hour-item">12:00</button>
                <button className="hour-item">13:00</button>
                <button className="hour-item">14:00</button>
                <button className="hour-item">15:00</button>
                <button className="hour-item">16:00</button>
                <button className="hour-item">17:00</button>
                <button className="hour-item">18:00</button>
                <button className="hour-item">19:00</button>
                <button className="hour-item">20:00</button>
                <button className="hour-item">21:00</button>            
            </div>

            {dates.map((date, index) => (
                <>
                <div key={index}>date:{date.date}</div>
                <div>avialibility: {date.availableSlots[0].startTime}</div>
                </>
            )

            )}

        </div>
    )
}

export default Calendar
