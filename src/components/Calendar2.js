import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { DateTime } from "luxon"
import "./Calendar.css"

const Calendar = () => {

    const [dates, setDates] = useState([])
    const [showButtonId, setShowButtonId] = useState(null)
    const hourOfDayRef = useRef()

    useEffect(() => {
        
        const fetchDates = async () => {
          const { data } = await axios.get("/availability")

          const newData = data.value[0].scheduleItems

          setDates(newData)            
        }          

        fetchDates()
    },[])

    const daysOfWeek = ["Mon","Tue", "Wed", "Thu", "Fri","Sat", "Sun"]
    const hoursOfDay = ["8:00", "9:00", "10:00", "11:00", "12.00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"] 

    let startNum = 10

    const handleClick = (event) => {
        event.preventDefault()
        setShowButtonId(event.target.id) 
    }

    return (
        <div className="container">            

            <section className="timezone">Your timezone: GMT +00:00</section>

            <div className = "day-container">
                {daysOfWeek.map((dayOfWeek) => {
                    
                    return (
                        <button 
                        key={dayOfWeek}
                        className={`day-item ${dayOfWeek.toLowerCase()}`}
                        id={dayOfWeek.toLowerCase()}
                        onClick={(event) => handleClick(event)}
                        >
                            {`${startNum+=1}th`}
                            <br/>
                            {dayOfWeek}
                        </button>
                    )

                })}                
            
            </div>

            <div className = "hour-container">
               
                <button className="hour-item eight">8:00</button>
                <button className="hour-item nine">9:00</button>
                <button className="hour-item ten">10:00</button>
                <button className="hour-item eleven">11:00</button>
                <button className="hour-item twelve">12:00</button>
                <button className="hour-item thirteen">13:00</button>
                <button className="hour-item fourteen">14:00</button>
                <button className="hour-item fifteen">15:00</button>
                <button className="hour-item sixteen">16:00</button>
                <button className="hour-item seveneen">17:00</button>
                <button className="hour-item eighteen">18:00</button>
                <button className="hour-item nineteen">19:00</button>
                <button className="hour-item twenty">20:00</button>
                <button className="hour-item twentyone">21:00</button>
                         
            </div>

            {dates.map((date) => {                           
                
               
                //const weekDay = DateTime.local(date.start.dateTime)
                const weekDayObjStart = DateTime.fromISO(date.start.dateTime)
                const weekDayObjEnd = DateTime.fromISO(date.end.dateTime)
                const weekDay = weekDayObjStart.weekdayShort

                if(weekDay.toLowerCase() === showButtonId && date.status === "Tentative") {
                // if(weekDay.toLowerCase() === showButtonId) {

                    const slotArr = [weekDayObjStart.hour, weekDayObjEnd.hour]
                     console.log("slotArr",slotArr)
                    const slots = slotArr.map(slot => {
                         
                            console.log("slot",slot)
                            let hourOfDayEl
                            
                            if(slot === 8)
                                 hourOfDayEl = document.querySelector(`.eight`)
                            else if (slot === 9)
                                 hourOfDayEl = document.querySelector(".nine")
                            else if (slot === 10)
                                 hourOfDayEl = document.querySelector(".ten")
                            else if (slot === 11)
                                 hourOfDayEl = document.querySelector(".eleven")
                            else if (slot === 12)
                                 hourOfDayEl = document.querySelector(".twelve")
                            else if (slot === 13)
                                 hourOfDayEl = document.querySelector(".thirteen")
                            else if (slot === 14)
                                 hourOfDayEl = document.querySelector(".fourteen")
                            else if (slot === 15)
                                 hourOfDayEl = document.querySelector(".fifteen")
                            else if (slot === 16)
                                 hourOfDayEl = document.querySelector(".sixteen")
                            else if (slot === 17)
                                 hourOfDayEl = document.querySelector(".seventeen")
                            else if (slot === 18)
                                 hourOfDayEl = document.querySelector(".eighteen")
                            else if (slot === 19)
                                 hourOfDayEl = document.querySelector(".nineteen")
                            else if (slot === 20)
                                 hourOfDayEl = document.querySelector(".twenty")
                            else if (slot === 21)
                                hourOfDayEl = document.querySelector(".twentyone")
                            else 
                                hourOfDayEl = null   
                            console.log(hourOfDayEl)
                            
                         return  hourOfDayEl.classList.add("after")
                           
                        })
                }                

                const el = document.querySelector(`.${weekDay.toLowerCase()} `)
                
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
