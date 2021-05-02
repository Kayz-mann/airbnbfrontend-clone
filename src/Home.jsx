import React from 'react'
import Banner from './Banner'
import "./Home.css"
import Card from "./Card"

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card 
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friend or family." />
                 <Card 
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friend or family."/>
               <Card 
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friend or family."/>
            </div>
            <div className="home__section">
            <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Entire homes"
                description="Comfortable private places, with room for friend or family."
                price="£135/night"
            />
            <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Entire homes"
                description="Comfortable private places, with room for friend or family."
                price="£135/night"
            />
            <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Entire homes"
                description="Comfortable private places, with room for friend or family."
                price="£135/night"
            />
            </div>
        </div>
    )
}

export default Home
