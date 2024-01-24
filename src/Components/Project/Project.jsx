import React from 'react'
import './project.css'
import Project1 from '../../assets/work1.jpg'
import Project2 from '../../assets/work2.jpg'
import Project3 from '../../assets/work3.jpg'
import Project4 from '../../assets/work4.jpg'
import Project5 from '../../assets/work5.jpg'

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Project = () => {
    return (
        <section className='project container section' id='portfolio'>
            <h2 className='section__title'>Projects</h2>
            <span className='section__subtitle'>Most recent works</span>

            <Swiper className='project__container'
                loop= {true}
                grabCursor= {true}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                       
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                   
                }}
                modules={[Pagination]}
               >
                <SwiperSlide className='project__card'>
                    <img src={Project1} alt='' className='project__img' />
                    <h3 className='project__name'>Project 1</h3>
                </SwiperSlide>
                <SwiperSlide className='project__card'>
                    <img src={Project2} alt='' className='project__img' />
                    <h3 className='project__name'>Project 2</h3>
                </SwiperSlide>
                <SwiperSlide className='project__card'>
                    <img src={Project3} alt='' className='project__img' />
                    <h3 className='project__name'>Project 3</h3>
                </SwiperSlide>
                <SwiperSlide className='project__card'>
                    <img src={Project4} alt='' className='project__img' />
                    <h3 className='project__name'>Project 4</h3>
                </SwiperSlide>
                <SwiperSlide className='project__card'>
                    <img src={Project5} alt='' className='project__img' />
                    <h3 className='project__name'>Project 5</h3>
                </SwiperSlide>
            </Swiper>
        </section >
    )
}

export default Project