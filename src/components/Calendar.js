import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { DateTime } from "luxon"
import "./Calendar.css"

const Calendar = () => {

    const [dates, setDates] = useState([])
    const [showButtonId, setShowButtonId] = useState(null)
    const hourOfDayRef = useRef()
    let dateRef = useRef([])

    useEffect(() => {
        
        const fetchDates = async () => {
          const { data } = await axios.get("/availability")         

          setDates(data)            
        }          

        fetchDates()
    },[])

    const daysOfWeek = ["Mon","Tue", "Wed", "Thu", "Fri","Sat", "Sun"]
    // const hoursOfDay = ["8:00", "9:00", "10:00", "11:00", "12.00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"] 
    let startNum = 10

    const handleClick = (event) => {
        event.preventDefault()
        setShowButtonId(event.target.id) 
        // console.log("ref", hourOfDayRefArray.current)
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
               
                <button className="hour-item eight" disabled={true}>8:00</button>
                <button className="hour-item nine" disabled={true}>9:00</button>
                <button className="hour-item ten" disabled={true}>10:00</button>
                <button className="hour-item eleven" disabled={true}>11:00</button>
                <button className="hour-item twelve" disabled={true}>12:00</button>
                <button className="hour-item thirteen" disabled={true}>13:00</button>
                <button className="hour-item fourteen" disabled={true}>14:00</button>
                <button className="hour-item fifteen" disabled={true}>15:00</button>
                <button className="hour-item sixteen" disabled={true}>16:00</button>
                <button className="hour-item seveneen" disabled={true}>17:00</button>
                <button className="hour-item eighteen" disabled={true}>18:00</button>
                <button className="hour-item nineteen" disabled={true}>19:00</button>
                <button className="hour-item twenty" disabled={true}>20:00</button>
                <button className="hour-item twentyone" disabled={true}>21:00</button>
                         
            </div>

            {dates.map((date) => {
                                
                const weekDayObj = DateTime.fromFormat(date.date, "dd/MM/yyyy")
                
               const weekDay = weekDayObj.weekdayShort          
                

                if(weekDay.toLowerCase() === showButtonId) {
                    const slots = date.availableSlots.map(slot => {
                        let refs = []
                        
                         console.log("slots starttime",slot.startTime)
                            if(slot.startTime === "8:00")
                                 dateRef.current = document.querySelector(`.eight`)
                            else if (slot.startTime === "9:00")
                                 dateRef.current = document.querySelector(".nine")
                            else if (slot.startTime === "10:00")
                                 dateRef.current = document.querySelector(".ten")
                            else if (slot.startTime === "11:00")
                                 dateRef.current = document.querySelector(".eleven")
                            else if (slot.startTime === "12:00")
                                 dateRef.current = document.querySelector(".twelve")
                            else if (slot.startTime === "13:00")
                                 dateRef.current = document.querySelector(".thirteen")
                            else if (slot.startTime === "14:00")
                                 dateRef.current = document.querySelector(".fourteen")
                            else if (slot.startTime === "15:00")
                                 dateRef.current = document.querySelector(".fifteen")
                            else if (slot.startTime === "16:00")
                                 dateRef.current = document.querySelector(".sixteen")
                            else if (slot.startTime === "17:00")
                                 dateRef.current = document.querySelector(".seventeen")
                            else if (slot.startTime === "18:00")
                                 dateRef.current = document.querySelector(".eighteen")
                            else if (slot.startTime === 19)
                                 dateRef.current = document.querySelector(".nineteen")
                            else if (slot.startTime === 20)
                                 dateRef.current = document.querySelector(".twenty")
                            else if (slot.startTime === 21)
                                dateRef.current = document.querySelector(".twentyone")
                            else 
                                dateRef.current = null  
                            
                            refs.push(dateRef.current)
                        
                        refs.map((ref) => {

                            return ref.disabled = false
                            
                            }) 
                        
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
