import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>

       <div className="home">
        <h2>Welcome to Cntact Optimizer....!</h2>
        <p>"A Contact Manager App designed to efficiently manage your personal and professional contacts. With features like adding, editing and deleting, it ensures seamless organization and easy access to important contact information. Perfect for individuals and teams looking to streamline communication and stay organized.".</p>

            <Link to={'/contact'}><button className="home-btn bg-warning " style={{color:"black"}}>Let's begin</button></Link>
       </div>
    </>
  )
}

export default Home