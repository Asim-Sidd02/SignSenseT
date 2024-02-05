import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO SignSense' title='Real-Time Sign Language Translation' />
            <p>SignSense translates sign language to spoken language in real-time, enhancing communication accessibility for the deaf and hard of hearing.</p>
            <div className='button'>
              <button className='primary-btn'>
                SIGN TO TEXT <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                TEXT TO SIGN <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
