import React from "react"
import "./style.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/data"

const App = () => {

    const cards = data.map(card => {
        return (
            <Card 
             {...card}
            />
        )
    })

    return (
        <div className="main">
            <Navbar />
            <Hero />
            <div className="cards-main">
                 {cards}
            </div>
        </div>
    )
}

export default App