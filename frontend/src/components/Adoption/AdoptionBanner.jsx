import React from 'react'
import { TbCheck } from "react-icons/tb";
const AdoptionBanner = () => {
  return (
    <div className='paws-banner'>
      <div className="container py-5">
        <diw className="row">
            <div className="col-lg-6">
                <div className="banner-heading">
                    <h2>Discover Your Future Family Member</h2>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="banner-sub-detail">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime amet ullam sequi unde saepe numquam temporibus dicta quod, molestias voluptate provident sit voluptatem adipisci. Temporibus inventore a dolor. Molestiae, et!</p>
                    <div className="head-sub-text">
                        <div className="icon-text">
                            <div className="icon-bg">
                            <TbCheck color="#fff"
                            fontSize={14}
                            />
                            </div>
                            
                            <h4>Vaccinated</h4>
                        </div>
                        <div className="icon-text">
                        <div className="icon-bg">
                            <TbCheck color="#fff"
                            fontSize={14}
                            />
                            </div>
                            <h4>Vaccinated</h4>
                        </div>
                        <div className="icon-text">
                        <div className="icon-bg">
                            <TbCheck color="#fff"
                            fontSize={14}
                            />
                            </div>
                            <h4>Vaccinated</h4>
                        </div>
                    </div>
                </div>
            </div>
        </diw>
      </div>
    </div>
  )
}

export default AdoptionBanner
