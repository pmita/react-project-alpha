import React from 'react'
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
    text-align: center;
    p{
        font-family: 'RobotoMono Regular';
        font-size: 2rem;
    }
    h2{
        font-family: 'Montserrat Bold';
        font-size: 6rem;
        margin-top: 0.5rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px){
        p{
            font-size: 1.2rem;
        }
        h2{
            font-size: 3.6rem;
        }
    }
`;

export default function SectionTitle({subheading = 'This is a subheading', subtitle = 'This is our heading'}) {
    return (
        <SectionTitleStyle className="section__title">
            <p>{subheading}</p>
            <h2>{subtitle}</h2>
        </SectionTitleStyle>
    );
}
