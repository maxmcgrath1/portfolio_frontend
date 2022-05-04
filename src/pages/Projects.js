import { useState, useEffect } from "react";

function Projects(props) {
    // create state to hold projects
    const [projects, setProjects] = useState([]);

    //create function to make api call
    const getProjectsData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + "projects");
        // turn response into javascript object
        const data = await response.json();
        // set the projects state to the data
        setProjects(data);
    };

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getProjectsData(), []);

    // define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
            <div className = "project">
                <h1 className ="projname">{project.name}</h1>
                <img src={project.image} alt={project.name} />
                <h3 className="projectDescription">{project.description}</h3>
                <a href={project.git}>
                    <button className="btn btn-info">GitHub Repo</button>
                </a>
                <a href={project.live}>
                    <button className="btn btn-primary">Live Site</button>
                </a>
            </div>
        ));
    };

    return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;