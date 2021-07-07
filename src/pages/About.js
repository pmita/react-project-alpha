import React from 'react'
//importing components
import PText from '../components/PText';
import Button from '../components/Button';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
//importing our assets
import AboutImg from '../assets/images/about-page-img.png';
//importing styled components
import styled from 'styled-components';

const AboutPageStyles = styled.div`
    padding: 20rem 0 10rem 0;
    .top-section{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
    .left{
        flex: 3;
    }
    .right{
        flex: 2;
        img{
            border: 2px solid var(--gray-1);
        }
    }
    .about__subheading{
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span{
            background-color: var(--deep-dark);
            padding: 0.5rem;
            border-radius: 8px;
        }
    }
    .about__heading{
        font-size: 3.6rem;
        margin-bottom: 3rem;
    }
    .about__info{
        margin-bottom: 4rem;
        .para{
            max-width: 100%;
        }
    }
    .about__info__items{
        margin-top: 15rem;
    }
    .about__info__item{
        margin-bottom: 10rem;
    }
    .about__info__heading{
        font-size: 3.6rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px){
        padding: 10rem 0;
        .top-section{
            flex-direction: column;
            gap: 5rem;
        }
        .about__heading{
            font-size: 2.8rem;
        }
        .about__subheading{
            font-size: 1.8rem;
        }
        .about__info__heading{
            font-size: 3rem;
        }
    }
`;

function About() {
    return (
        <AboutPageStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">
                            Hi, I am <span>Panos Mita</span>
                        </p>
                        <h2 className="about__heading">
                            A freelance Web developer
                        </h2>
                        <div className="about__info">
                            <PText>
                                I am from Greece and currently living in the UK.
                                I help small businesses reach out their true potential and
                                go digital along the way.
                            </PText>
                            <PText>
                                Primarily I focus on minimal design with good UI/UX principles in mind
                                that are aimed to give an effortless experience to all users. All design
                                is coulped with the latest tech stacks that Web Development has to offer
                                right now.
                            </PText>
                            <PText>
                                My vision is to help every one going digital one web application at a time.
                                No matter how small or big all customers require a personalized solution to their
                                problem and this is what I am offering.
                            </PText>
                        </div>
                        <Button btnText="Download CV" btnLink="#" />
                    </div>
                    <div className="right">
                        <img src={AboutImg} alt="This is me" />
                    </div>
                </div>

                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info_heading">Education</h1>
                        <AboutInfoItem 
                            title="School"
                            items={['Lancaster University - Engineering']}
                        />
                        <AboutInfoItem 
                            title="College"
                            items={['Lancaster University - Engineering']}
                        />
                    </div>
                    <div className="about__info__item">
                        <h1 className="about__info_heading">My Skills</h1>
                        <AboutInfoItem 
                            title="FrontEnd"
                            items={['React', 'JS', 'CSS']}
                        />
                        <AboutInfoItem 
                            title="BackEnd"
                            items={['RestAPI', 'GraphQL', 'Firebase']}
                        />
                        <AboutInfoItem 
                            title="Design"
                            items={['Figma', 'Photoshop']}
                        />
                    </div>
                    <div className="about__info__item">
                        <h1 className="about__info_heading">Experiences</h1>
                        <AboutInfoItem 
                            title="2018 - Current"
                            items={['DevOps Engineer - DXC']}
                        />
                        <AboutInfoItem 
                            title="2017 - 2018"
                            items={['Project Manager']}
                        />
                    </div>
                </div>
            </div>

            <ContactBanner />
        </AboutPageStyles>
    )
}

export default About;
