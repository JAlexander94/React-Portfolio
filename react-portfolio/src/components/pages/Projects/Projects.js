import React from "react";
import projectsdata from "./projects.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

function NewProjects(props) {
  return (
  <div class="col-4">  
  <div className="card">
  <div className="img-container">
    <img alt={props.title} src={props.screenshot} />
  </div>
  <div className="content">
    <ul>
      <li>
        <strong>Title:</strong> {props.title}
      </li>
      <li>
        <a href={props.weblink}>Website Link</a> 
      </li>
      <li>
        <a href={props.gitlink}>Repository Link</a> 
      </li>
    </ul>
  </div>
</div>
</div>
  )
}

function Projects() {
  return (
    <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Projects Page</h1>
      </div>
    </div>
    <div class="row">
    {projectsdata.map((project) => (
      <NewProjects
      title={project.title}
      screenshot={project.screenshot}
      weblink={project.weblink}
      gitlink={project.gitlink}
      />
    ))}
    </div>
  </div>
);
    }

export default Projects;
