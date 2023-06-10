import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/sliderImages/slider1.jpg'
import slider2 from '../../../assets/sliderImages/slider2.jpg'
import slider3 from '../../../assets/sliderImages/slider3.jpg'
import slider4 from '../../../assets/sliderImages/slider4.jpg'

const Slider = () => {
    return (
        <div className='md:w-1/2 md:mx-auto '>
            <Carousel showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={slider1} />
                    <p className="legend">
                        Learning languages sparks joy, fosters understanding, and opens doors to diverse cultures. Embark on your language learning journey today!
                    </p>
                </div>
                <div>
                    <img src={slider2} />
                    <p className="legend">
                        Learning a new language enhances cognitive abilities, boosts memory, and improves problem-solving skills. It opens doors to new opportunities, enriches cultural understanding, and enhances global communication. It promotes personal growth, expands career prospects, and fosters connections with people from different backgrounds. Embrace the advantages of language learning and embark on a rewarding journey of self-discovery and cross-cultural exploration.
                    </p>
                </div>
                <div>
                    <img src={slider3} />
                    <p className="legend">
                        Learning multiple languages expands horizons, boosts cognitive abilities, and connects cultures. Gain a competitive edge, broaden perspectives, and embrace a multilingual world. Start your language journey now!
                    </p>
                </div>
                <div>
                    <img src={slider4} />
                    <p className="legend">
                        Embark on an exciting language journey for children! Our immersive programs foster communication skills, cultural understanding, and a lifelong passion for languages. With engaging activities and expert guidance, we ignite curiosity and open doors to a world of possibilities. Join us today and empower your child's future!
                    </p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;