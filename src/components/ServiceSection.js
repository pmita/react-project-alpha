import React from 'react'
//Importing our components
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import styled from 'styled-components';
//Importing react icons
import {MdDesktopMac, MdCode, MdPhonelinkSetup} from 'react-icons/md';

const ServicesItemStyles = styled.div`
    padding: 10rem 0;
    .services__allItems{
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }

    @media only screen and (max-width: 768px){
        .srvices__allItems{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
        }
    }
`;

export default function ServiceSection() {
    return (
        <ServicesItemStyles>
           <div className="container">
            <SectionTitle heading="Services" subheading="What will I do for you"/>

                <div className="services__allItems">
                    <ServicesSectionItem 
                        icon={<MdDesktopMac />} 
                        title="Web design" 
                        description="Lorem Ipsum dollar sign as fdg dafdaf a
                        Lorem Ipsum dollar sign as fdg dafdaf a
                        Lorem Ipsum dollar sign as fdg dafdaf a
                        Lorem Ipsum dollar sign as fdg dafdaf a"
                    />
                    <ServicesSectionItem 
                        icon={<MdCode />} 
                        title="Web dev" 
                        description="Lorem Ipsum dollar sign as fdg dafdaf a
                        Lorem Ipsum dollar sign as fdg dafdaf a
                        Lorem Ipsum dollar sign as fdg dafdaf a
                        Lorem Ipsum dollar sign as fdg dafdaf a"
                    />
                    <ServicesSectionItem 
                        icon={<MdPhonelinkSetup />} 
                        title="App Design" 
                        description="Lorem Ipsum dollar sign as fdg dafdaf a
                        Lorem Ipsum dollar sign as fdg dafdaf a
                        Lorem Ipsum dollar sign as fdg dafdaf a
                        Lorem Ipsum dollar sign as fdg dafdaf a"
                    />
                </div>
           </div>
        </ServicesItemStyles>
    );
}
