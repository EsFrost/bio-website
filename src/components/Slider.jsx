import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import './slider.css'

  const slideImages = [
    {
      url: 'https://sigmafi-tech.website/etc-images/hero-one.jpg',
      caption: 'Visit Bio',
      id: '1'
    },
    {
      url: 'https://sigmafi-tech.website/etc-images/hero-two.jpg',
      caption: 'Visit Portfolio',
      id: '2'
    },
  ]
  
  const Slider = () => {
      return (
        <div className="slide-container">
          <Slide>
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div className='style-div' style={{'backgroundImage': `url(${slideImage.url})` }}>
                    {slideImage.id === '1' ? 
                        <a href='#bio'><button className='button'>{slideImage.caption}</button></a>
                    :
                        <a target='_blank' href='https://sigmafi-tech.website/my-portfolio/'><button className='button'>{slideImage.caption}</button></a>
                }
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
  }

export default Slider