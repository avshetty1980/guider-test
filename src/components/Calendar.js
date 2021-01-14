import React, { useState, useEffect } from "react"
import axios from "axios"
import { DateTime } from "luxon"
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

    const daysOfWeek = ["Mon","Tue", "Wed", "Thu", "Fri","Sat", "Sun"]
    let startNum = 10
    return (
        <div className="container">
            

            <section className="timezone">Your timezone: GMT +00:00</section>

            <div className = "day-container">
                {daysOfWeek.map((dayOfWeek) => {
                    return (
                    <div 
                    key={dayOfWeek}
                    className={`day-item ${dayOfWeek.toLowerCase()}`}
                    >
                        {`${startNum+=1}th`}
                        <br/>
                        {dayOfWeek}
                    </div>
                    )

                })}                
            
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

            {dates.map((date) => {
                
            
                // const dateRes = DateTime.fromFormat(date.date, "dd/MM/yyyy").day
                // console.log("Date:",dateRes)

                const weekDay = DateTime.fromFormat(date.date, "dd/MM/yyyy").weekdayShort
                // console.log("weekday:",weekDay)

                // const startTime = date.availableSlots[0].startTime
                // console.log("startTime:",startTime)

                // const dateResAdd = DateTime.fromFormat(date.date, "dd/MM/yyyy").plus({ days: 4 }).day
                // console.log("Added Date:",dateResAdd)

                // const dateResMin = DateTime.fromFormat(date.date, "dd/MM/yyyy").plus({ days: -4 }).day
                // console.log("Minused Date:",dateResMin)

                const el = document.querySelector(`.${weekDay.toLowerCase()} `)
                
                console.log("el:", el.className + "after")

                return (

                    el.classList.add("after")
                )
        }

            )
            
            }            

        </div>
    )
}

export default Calendar
