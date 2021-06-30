import React from 'react';
//importing components
import PText from './PText';
import FooterColumn from './FooterColumn';
import styled from 'styled-components';

const FooterStyles = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container{
        display: flex;
        gap: 2rem;
    }
    .footer__col1{
        flex: 2;
    }
    .footer__col2,
    .footer__col3,
    .footer__col4{
        flex: 1;
    }
    .footer__col__title{
        font-size: 3.5rem;
        margin-bottom: 1rem;   
    }
    .copyright{
        background-color: var(--dark-bg);
        text-align: left;
        padding: 1rem 0;
        margin-top: 5rem;
        .para{
            margin-left: 0;
        }
    }
    @media only screen and (max-width: 768px){
        .container{
            flex-direction: column;
            gap: 0rem;
            & > div{
                margin-top: 5rem;
            }
        }
        .footer__col1 .para{
            max-width: 100%;
        }
        .copyright{
            .container{
                div{
                    margin-top: 0;
                }
            }
        }
    }
`;

export default function Footer() {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">
                        Panos Mita
                    </h1>
                    <PText>
                        A freelance web designer and developer
                        from greece helping small businesses going
                        digital
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterColumn 
                        heading="Important Links"
                        links = {
                            [{
                                title : "Home",
                                path: '/',
                                type : 'Link'
                            },
                            {
                                title : "About",
                                path: '/about',
                                type : 'Link'
                            },
                            {
                                title : "Projects",
                                path: '/projects',
                                type : 'Link'
                            },
                            {
                                title : "Contact",
                                path: '/contact',
                                type : 'Link'
                            }]
                        }
                    />
                </div>
                <div className="footer__col3">
                    <FooterColumn 
                        heading="Contact Info"
                        links = {
                            [{
                                title : "+44 07808704069",
                                path: 'tel:+07808704069',
                            },
                            {
                                title : "panos.mita2@outlook.com",
                                path: 'mailto:panos.mita2@outlook.com',
                            }]
                        }
                    />
                </div>
                <div className="footer__col4">
                    <FooterColumn 
                        heading="Social Links"
                        links={
                            [{
                                title: 'Facebook',
                                path: 'http://wwww.facebook.com'
                            },{
                                title: 'Instagram',
                                path: 'http://www.instagram.com'
                            },{
                                title: 'Youtube',
                                path: 'http://wwww.youtube.com'
                            }]
                        }
                    />
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <PText>
                        Copyright 2021 - Web Dev official
                    </PText>
                </div>
            </div>
        </FooterStyles>
    )
}
