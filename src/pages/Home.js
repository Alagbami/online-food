import React from 'react'
import { Link } from 'react-router-dom'
import BananaImage from "../assets/pizza.jpeg"

import '../styles/Home.css'

function Home() {
  return (
    <div className='home'
    style={{ backgroundImage: `url(${BananaImage})` }}>
      <div className='headerContainer'>
        <h1>Leke Fast Food</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link>
          <button>ORDER NOW</button>
        </Link>
      </div>

    </div>
  )
}

export default Home