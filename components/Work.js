import React from "react";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <div className="CardWrapper">
      <h2>Work</h2>
      <div className="ProjectCard">
        <ProjectCard
          title="Primer Projecto"
          text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
          link="https://www.github.com/"
        />
      </div>
      <div>
        <ProjectCard
          title="Primer Projecto"
          text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
          link="https://www.github.com/"
        />
      </div>
      <div>
        <ProjectCard
          title="Primer Projecto"
          text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
          link="https://www.github.com/"
        />
      </div>
      <div>
        <ProjectCard
          title="Primer Projecto"
          text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
          link="https://www.github.com/"
        />
      </div>
      <div>
        <ProjectCard
          title="Primer Projecto"
          text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
          link="https://www.github.com/"
        />
      </div>
      <div>
        <ProjectCard
          title="Primer Projecto"
          text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
          link="https://www.github.com/"
        />
      </div>

      <style jsx>{`
        .CardWrapper{
          overflow: auto;
  white-space: nowrap;
        }
        div {
          display: inline-block;
          
          padding: 14px;
      
        }
 
      `}</style>
    </div>
  );
}
