import { useState } from "react"

const obj = {
    Neutral: "😐",
    Happy: "😀",
    Sad: "☹️",
    Angry: "😡"
}
let history = []

export default function Mood() {
    const [data, chenMood] = useState("Neutral")
    return (
        <div>
            <h1 className="mood">Current Mood:</h1>
            <h1 id="mood">{data} {obj[data]}</h1>

            <button className="button" onClick={()=>{
                history.push(data)
                chenMood("Neutral")
            }}></button>

            <button className="button" onClick={() => {
                history.push(data)
                chenMood("Happy")
            }}>Happy</button>

            <button className="button" onClick={() => {
                history.push(data)
                chenMood("Sad")
            }}>Sad</button>

            <button className="button" onClick={() => {
                history.push(data)
                chenMood("Angry")
            }}>Angry</button>
            
            <button className="button" onClick={() => {
                history.push(data)
                chenMood("Neutral")
                history =[]
            }}>reset</button>
            <div>
                <h2>History:</h2>
                <p>{history.slice(-3)[0]}</p>
                <p>{history.slice(-3)[1]}</p>
                <p>{history.slice(-3)[2]}</p>
            </div>
        </div>
    ) 
}
