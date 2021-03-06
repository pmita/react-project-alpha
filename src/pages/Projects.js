import React, {useState, useEffect} from 'react';
//importing components
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';
import styled from 'styled-components';
import {MdSearch} from 'react-icons/md';

const ProjectStyles = styled.div`
    padding: 10rem 0;
    .projects__allItems{
        display: grid;   
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 5rem;
        margin-top: 5rem;
    }
    .projects__searchbar{
        position: relative;
        width: 300px;
        margin-top: 5rem;
    }
    .projects__searchbar input{
        width: 100%;
        font-size: 2rem;
        padding: 0.8rem;
        color: var(--black);
        border-radius: 6px;
        outline: none;
        border: none;
    }
    .projects__searchbar .searchIcon{
        position: absolute;
        width: 2rem;
        right: 1rem;
    }  
    .projects__searchbar .searchIcon path{
        color: var(--deep-dark);
    }
    @media only screen and (max-width: 768px){
        .projects__searchbar,
        .projects__searchbar form,
        .projects__searchbar input{
            width: 100%;
        }
    }
`;

function Projects() {
    //Set our state
const [projectData, setProjectData] = useState(ProjectInfo);
const [searchText, setSearchText] = useState('');

    //Set our useEffect hook
    useEffect( () => {
        if (searchText === '' ) return;
        setProjectData(() =>
            ProjectInfo.filter( item => 
                item.name.toLocaleLowerCase().match(searchText.toLocaleLowerCase())
            )
        );
    }, [searchText]);

    //Set our handlers
const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if(!e.target.value.length > 0){
        setProjectData(ProjectInfo);
    }
}

    return (
        <ProjectStyles>
            <div className="container">
                <SectionTitle 
                    heading="Projects"
                    subheading="some of my recent works"
                />
                <div className="projects__searchbar">
                    <form>
                        <input 
                            type="text" 
                            value={searchText}
                            onChange={handleChange}
                            placeholder="Project Name"    
                        />
                        <MdSearch className="searchIcon"/>
                    </form>
                </div>
                <div className="projects__allItems">
                    {projectData.map( item => (
                        <ProjectItem 
                            key={item.id}
                            title={item.name}
                            desc={item.desc}
                            img={item.img}
                        />
                    ))}
                    
                </div>
            </div>
        </ProjectStyles>
    )
}

export default Projects;
