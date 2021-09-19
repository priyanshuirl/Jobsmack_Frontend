import React, { useState, useEffect } from "react"
import "./jobcards.css"
import TinderCard from "react-tinder-card"
import axios from "./axios"
function Jobcards() {
    const [job, setjob] = useState([])
    useEffect(()=>{
        async function fetchdata(){
            const req= await axios.get("/jobsmack/cardsup")
            setjob(req.data)
            console.log(req.data)
        }
        fetchdata();
    },[])
    const swipe = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }
    const outOfFrame = (name) => {
        console.log(name + " left the Screen");
    }
    return (
        <div className="jobCards">
            <div className="jobcard__container">
                {job.map(job => (
                    <TinderCard
                        className="swipe"
                        key={job.jobname}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swipe(dir, job.jobname)}
                        onCardLeftScreen={() => outOfFrame(job.jobname)}
                    >
                        <div className="card">
                            <h1>{job.jobname}</h1>
                            <h2>{job.company}</h2>
                            <h3>Salary : {job.salary}</h3>
                            <h6><span className="span">Requirements : </span> {job.require}</h6>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
export default Jobcards;