import React from 'react'
import { Container } from 'reactstrap'
import Slider from 'react-slick'
import './HeroSlider.css'


import sliderImg01 from "../../assets/images/flower1.png";
import sliderImg02 from "../../assets/images/flower2.jpg";
import sliderImg03 from "../../assets/images/farmer.jpg";

const sliderData = [
  {
    id: "01",
    title: "Welcome to the place where natural flavor is born",
    desc: "Modern farms and agricultural operations work far differently than those a few decades ago, primarily because of advancements in technology, including sensors, devices, machines, and information technology",
    imgUrl: sliderImg01,
  },
  {
    id: "02",
    title: "Organic and online attributes for buying and selling agricultural products in the e-marketplace",
    desc: "Through a Partial Least Square path modelling (PLS), a multi-group analysis (MGA) is applied to test a product́s online and organic attributes that may influence the intention of using an e-marketplace to buy and sell organic products.",
    imgUrl: sliderImg02,
  },
  {
    id: "03",
    title: "Agriculture in india ",
    desc: "The history of agriculture in India dates back to the neolothic. India ranks second worldwide in farm outputs. As per Indian economic survey 2018, agriculture employed more than 50% of the Indian work force and contributed 17–18% to country's GDP",
    imgUrl: sliderImg03,
  },
];

const HeroSlider = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <section>
      <Container >
        <Slider {...settings}>
          {
            sliderData.map((item)=>(
              <div key={item.id}>
                <div className="slider__wrapper d-flex align-items-center justify-content-between pt-5 ">
                  <div className="slider__content w-50 ps-2">
                    <h2 className='mb-3'>{item.title}</h2>
                    <p >{item.desc}</p>
                    <button className='btn'>Explore More</button>
                  </div>

                  <div className="slider__img w-50">
                    <img src={item.imgUrl} alt="" className='w-100'/>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </Container>
    </section>
  )
}

export default HeroSlider