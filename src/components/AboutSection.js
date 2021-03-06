import React from 'react';
import styled from 'styled-components';
//Importing our components
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
//Importing our assets
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyle = styled.div`
    padding: 10rem 0;
    .container{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: left;
    }
    .aboutSection__left,
    .aboutSection__right{
        flex:1;
    }
    .section__title{
        text-align: left;
    }
    .para{
        margin-top: 2rem;
        margin-left: 0;
    }
    .aboutSection__buttons{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
    }
    @media only screen and (max-width: 950px){
        .aboutSection__left{
         flex: 4;   
        }
        .aboutSection__right{
            flex: 3;
        }
    }
    @media only screen and (max-width: 768px){
        .container{
            flex-direction: column;
            text-align: center;
        }
        .aboutSection__left,
        .aboutSection__right{
            width: 100%;
        }
        .aboutSection__right{
            margin-top: 3rem;
        }
        .section-title{
            text-align: center;
        }
        .para{
            margin: 0 auto;
            margin-top: 2rem;
        }
        .aboutSection__buttons{
            flex-direction: column;
            gap: 0rem;
            .button-wrapper,
            a{
                width: 100%;
                text-align: center;
            }
        }
    }
`; 

export default function AboutSection() {
    return (
        <AboutSectionStyle>
            <div className="container">
                <div className="aboutSection__left">
                    <SectionTitle 
                        className="section-title"
                        subheading='Here are some of the things you should know'
                        subtitle='About me'
                    />
                    <PText>
                        I am a freelancer web designer and
                        developer from Athens, Greece. I create professional websites.
                        I love art and always try to show unique views to the audience
                        through my design.
                    </PText>
                    <div className="aboutSection__buttons">
                        <Button 
                            btnLink="/projects"
                            btnText="Work"
                        />
                        <Button 
                            btnLink="/about"
                            btnText="Read More"
                            outline={true}
                        />
                    </div>
                </div>
                <div className="aboutSection__right">
                    <img src={AboutImg} alt='This is me eating and drinking coffee' />
                </div>
            </div>
        </AboutSectionStyle>
    );
}
