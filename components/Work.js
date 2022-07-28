import React from 'react'
import ProjectCard from './ProjectCard'

export default function Work(props) {
  return (
    <div className='CardWrapper'>
      <h2>Work</h2>
      <div>
        <ProjectCard
          title="Primer Projecto"
          text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
          image='/public/screenShots/asanas.png'
          
        />
      </div>

      <style jsx>{`
      .CardWrapper{
        padding: 0 3rem;
      }
      `}</style>



    </div>
  )
}
