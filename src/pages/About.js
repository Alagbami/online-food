import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';

import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'
        style={{backgroundImage: `url(${MultiplePizzas})` }}>
        </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>
                Welcome to our pizza restaurant! We're passionate about serving delicious, authentic pizza to our customers, made with only the freshest and finest ingredients.
                We're committed to using only the best ingredients in our pizzas, from our homemade dough to our freshly made tomato sauce and locally sourced toppings. We believe
                 that great pizza starts with great ingredients, and we work hard to ensure that every pizza we make is of the highest quality.

                In addition to our classic pizzas, we offer a variety of unique and creative toppings that you won't find anywhere else. From gourmet meats and cheeses to fresh veggies and herbs, our toppings are always fresh and flavorful.

                But we're not just about pizza, we also offer a variety of salads, sandwiches, and sides that are perfect for any appetite. And of course, we have a selection of desserts that are sure to satisfy your sweet tooth.

                At our restaurant, we're all about providing a warm and welcoming atmosphere where you can enjoy great food with your friends and family. Whether you're looking for a quick lunch, a romantic dinner for two, or a fun night out with your friends, we've got you covered.

                Thank you for choosing us for your pizza needs, we can't wait to serve you! 
            </p>
        </div>
    </div>
  )
}

export default About