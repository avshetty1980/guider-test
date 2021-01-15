import React, { useState, useEffect } from "react"
import axios from "axios"
import { DateTime } from "luxon"
import "./Calendar.css"

const Calendar = () => {

    const [dates, setDates] = useState([])
    const [showButtonId, setShowButtonId] = useState(null)

    useEffect(() => {
        
        const fetchDates = async () => {
          const { data } = await axios.get("/availability")

          setDates(data)            
        }          

        fetchDates()
    },[])

    const daysOfWeek = ["Mon","Tue", "Wed", "Thu", "Fri","Sat", "Sun"]
    const hoursOfDay = ["08:00", "09:00", "10:00", "11:00", "12.00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"] 
    let startNum = 10

    const handleClick = (event) => {
        event.preventDefault()
        setShowButtonId(event.target.id)   }

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
                {hoursOfDay.map((hourOfDay) => {
                    return (
                        <button
                         key={hourOfDay}
                         className={`hour-item ${hourOfDay}`}
                        >
                            {hourOfDay}
                        </button>
                    )
                })}
                         
            </div>

            {dates.map((date) => {
                
                

               const weekDay = DateTime.fromFormat(date.date, "dd/MM/yyyy").weekdayShort          

                

                // if(weekDay.toLowerCase() === showButtonId ) {
                //     const slots = date.availableSlots.map(slot => {
                //         const objValues = Object.values(slot).map(div => {
                //             const hourEl = document.querySelector(`.${div}`)
                //             console.log("hourEl",hourEl)
                //         })
                //         console.log("slots",objValues)
                        
                //     })
                //     console.log("you clicked end", DateTime.fromFormat(date.date, "dd/MM/yyyy").day )
                // }                

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
