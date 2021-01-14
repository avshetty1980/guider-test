import React from "react"

import "./Calendar.css"

const Calendar = () => {

    return (
        <div className="container">

            <section className="timezone">Your timezone: GMT +00:00</section>

            <div className = "day-container">
                <div class="day-item">11th<br/> Mon</div>
                <div class="day-item">12th <br/>Tue</div>
                <div class="day-item">13th <br/>Wed</div>
                <div class="day-item">14th <br/>Thur</div>
                <div class="day-item">15th<br/> Fri</div>
                <div class="day-item">16th <br/>Sat</div>
                <div class="day-item">17th <br/>Sun</div>
            
            </div>

            <div className = "hour-container">
                <button class="hour-item">08:00</button>
                <button class="hour-item">09:00</button>
                <button class="hour-item">10:00</button>
                <button class="hour-item">11:00</button>
                <button class="hour-item">12:00</button>
                <button class="hour-item">13:00</button>
                <button class="hour-item">14:00</button>
                <button class="hour-item">15:00</button>
                <button class="hour-item">16:00</button>
                <button class="hour-item">17:00</button>
                <button class="hour-item">18:00</button>
                <button class="hour-item">19:00</button>
                <button class="hour-item">20:00</button>
                <button class="hour-item">21:00</button>            
            </div>

        </div>
    )
}

export default Calendar
