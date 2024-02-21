import React from 'react'
import picture1 from '../../../public/assets/home-picture2.jpg'
import picture2 from '../../../public/assets/home-picture1.jpg'
import { TbPawFilled } from "react-icons/tb";
const HomeSection2 = () => {
  return (
    <div className='home-section2'>
      <div className="container py-5">
        <h2 className='my-5'>Creating a World Where Every Paw Finds A Loving Home</h2>
        <div className="row">
          <div className="col-lg-6 col-sm-12 section2 section2-left">

            <img src={picture1} alt="" className='section2-left-img' />
            <div className="row my-5">
              <div className="col-lg-6">
                <div className="head-icon">
                  <div className="bg-icon">
                    <TbPawFilled
                      color='#fff'
                      fontSize={24} />
                  </div>

                  <h4>Rescue Animals</h4>

                </div>
                <p>
                  We are passionate about rescuing animals from challenging situations, offering them a lifeline and a chance for a better future. Through our dedicated rescue efforts, we provide shelter, medical care, and love to animals in need, giving them a second chance at life. Join us in our mission to rescue and care for animals, one precious life at a time.</p>
              </div>
              <div className="col-lg-6">
                <div className="head-icon">
                  <div className="bg-icon">
                    <TbPawFilled
                      color='#fff'
                      fontSize={24} />
                  </div>
                  <h4>Rehabilitate</h4>

                </div>

                <p>We are dedicated to rehabilitating animals in need, providing them with the care, support, and love they require to thrive. Through our rehabilitation programs, we offer tailored assistance to help each animal recover physically, mentally, and emotionally, ensuring they have the best possible chance at a happy and healthy life.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 section2 section2-right">
            <p>We're on a mission to ensure every paw finds a loving home. Through rescue efforts, education, and advocacy, we're creating a world where every furry friend is valued and cherished. Join us in making a difference, one paw at a time</p>
            <img src={picture2} alt="" className='section2-right-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection2
