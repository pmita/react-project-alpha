import React, {useState} from 'react'
//Importing react transition group
import { CSSTransition, SwitchTransition } from 'react-transition-group';
//importing components
import SectionTitle from './SectionTitle';
import PText from './PText';
import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import testimonials from '../assets/data/testimonials';

const TestimonialStyles = styled.div`
    padding: 10rem 0;
    text-align: center;
    .testimonial__wrapper{
        position: relative;
        max-width: 700px;
        margin: 0 auto;
    }
    .testimonial__info{
        width: 100%;
        height: fit-content;
        padding: 3rem;
        background-color: var(--deep-dark);
        border-radius: 12px;
        margin-top: 5rem;
    }
    .testimonial__desc{
        .para{
            text-align: center;
        }
    }
    .testimonial__name{
        margin-top: 4rem;
        font-family: 'Montserrat Bold';
        font-size: 2.2rem;
    }
    .testimonial__title{
        font-size: 1.6rem;
        margin-top: 0.3rem;
    }
    .arrows{
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            width: 30px;
            pointer-events: none;
        }
    }
    .next,
    .prev{
        margin: 0 0.5rem;
        width: fit-content;
        background-color: var(--deep-dark);
        padding: 0.5rem 2rem;
        border-radius: 8px;
        cursor: pointer;
    }
    .fade-enter{
        opacity: 0;
        transform: scale(0.96);
    }
    .fade-enter-active{
        opacity: 1;
        transform: scale(1);
        transition: 250ms ease-in all;
    }
    .fade-exit{
        opacity: 1;
        transform: scale(1);
    }
    .fade-exit-active{
        opacity: 0;
        transform: scale(0.96);
        transition: 250ms ease-in all; 
    }
`;

export default function TestimonialsSection() {
    //Lets introduce our state
    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = testimonials[activeIndex];

    //Let's introduce our event listeners
    const handlePrev = () => {
        if(activeIndex <= 0){
            setActiveIndex(testimonials.length - 1);
        } else {
            setActiveIndex(oldIndex => oldIndex - 1);
        }
    }
    const handleNext = () => {
        if(activeIndex >= testimonials.length - 1){
            setActiveIndex(0);
        } else {
            setActiveIndex(oldIndex => oldIndex + 1);
        }
    }

    return (
        <TestimonialStyles>
            <div className="container">
                <SectionTitle 
                   heading="Testimonials" 
                   subheading = 'see what our clients say about us'
                />

                <div className="testimonial__wrapper">
                    <SwitchTransition>
                        <CSSTransition
                            key={activeSlide.id}
                            timeout={300}
                            classNames="fade"
                        >
                            <div className="testimonial__info">
                                <div className="testimonial__desc">
                                    <PText>
                                        {activeSlide.desc}
                                    </PText>
                                </div>
                                <h2 className="testimonial__name">
                                    {activeSlide.name}
                                </h2>
                                <p className="testimonial__title">
                                    {activeSlide.title}, <br />
                                    {activeSlide.org}
                                </p>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>

                <div className="arrows">
                    <div 
                        className="prev"
                        onClick={handlePrev}
                        role="button"
                        tabIndex={0}
                        onKeyDown={handlePrev}
                    >
                        <MdArrowBack />
                    </div>
                    <div 
                        className="next"
                        onClick={handleNext}
                        role="button"
                        tabIndex={0}
                        onKeyDown={handleNext}    
                    >
                        <MdArrowForward />
                    </div>
                </div>
            </div>
        </TestimonialStyles>
    )
}
