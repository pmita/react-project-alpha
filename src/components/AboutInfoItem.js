import React from 'react'
//importing components
import PText from './PText'
//import tsyling
import styled from 'styled-components';

const AboutItemStyles = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 3rem;
    position: relative;
    .title{
        font-size: 2.4rem;
    }
    .items{
        display: flex;
        gap: 1.5rem;
        position: absolute;
        left: 18rem;
    }
    .item{
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 8px;
    }
    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .items{
            position: initial;
            gap: 1rem;
        }
        .title{
            font-size: 2rem;
        }
    }
`;


export default function AboutInfoItem({
    title="This is title",
    items=[
        'HTML',
        'CSS',
        'JS'
    ]
}) {
    return (
        <AboutItemStyles>
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map( (item, index) => (
                    <div className="item" key={index}>
                        <PText>
                            {item}
                        </PText>
                    </div>
                ))}
            </div>
        </AboutItemStyles>
    )
}
