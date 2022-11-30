import React from 'react'
import phoneImg from './images/phone.svg'

const Hero = () => {
  return <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            payments for infrastructure for the internet
          </h1>
          <p>
            millions of companies of all sizes-from startups to Fortune use 500s use
            Stripe's software and APIS to accept payments ,send Payouts, and 
            manage their businesses online
          </p>
          <button className='btn'>
              Start now
          </button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className="phone-img" alt="phone"/>
        </article>
      </div>
  </section>
}

export default Hero
