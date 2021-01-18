import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { DateTime } from "luxon"
import "./Calendar.css"

const Calendar = () => {

    const [dates, setDates] = useState([])
    const [showButtonId, setShowButtonId] = useState(null)

    let dateRef = useRef([])

    useEffect(() => {
        
        const fetchDates = async () => {
          const { data } = await axios.get("/availability")

          const newData = data.value[0].scheduleItems

          setDates(newData)            
        }          

        fetchDates()

    },[])

    const daysOfWeek = ["Mon","Tue", "Wed", "Thu", "Fri","Sat", "Sun"]

    let startNum = 17

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
                
               
                //const weekDay = DateTime.local(date.start.dateTime)
                const weekDayObjStart = DateTime.fromISO(date.start.dateTime)
                const weekDayObjEnd = DateTime.fromISO(date.end.dateTime)
                const weekDay = weekDayObjStart.weekdayShort
                let refs = []

                if(weekDay.toLowerCase() === showButtonId && date.status === "Tentative") {
                // if(weekDay.toLowerCase() === showButtonId) {

                    const slotArr = [weekDayObjStart.hour, weekDayObjEnd.hour]
                     
                    slotArr.map(slot => {
                            
                            if(slot === 8)
                                 dateRef.current = document.querySelector(`.eight`)
                            else if (slot === 9)
                                 dateRef.current = document.querySelector(".nine")
                            else if (slot === 10)
                                 dateRef.current = document.querySelector(".ten")
                            else if (slot === 11)
                                 dateRef.current = document.querySelector(".eleven")
                            else if (slot === 12)
                                 dateRef.current = document.querySelector(".twelve")
                            else if (slot === 13)
                                 dateRef.current = document.querySelector(".thirteen")
                            else if (slot === 14)
                                 dateRef.current = document.querySelector(".fourteen")
                            else if (slot === 15)
                                 dateRef.current = document.querySelector(".fifteen")
                            else if (slot === 16)
                                 dateRef.current = document.querySelector(".sixteen")
                            else if (slot === 17)
                                 dateRef.current = document.querySelector(".seventeen")
                            else if (slot === 18)
                                 dateRef.current = document.querySelector(".eighteen")
                            else if (slot === 19)
                                 dateRef.current = document.querySelector(".nineteen")
                            else if (slot === 20)
                                 dateRef.current = document.querySelector(".twenty")
                            else if (slot === 21)
                                dateRef.current = document.querySelector(".twentyone")
                            else 
                                dateRef.current = null  

                            refs.push(dateRef.current)
                            
                            refs.map((ref) => {

                            return ref.disabled = false
                            
                            }) 
                           
                        })                      
                        
                        // console.log("slots",refs)
                        // refs.map((ref) => {

                        //     return ref.classList.add("after")
                            
                        //     })                        
                        
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
