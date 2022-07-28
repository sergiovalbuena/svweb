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
          link="https://www.github.com/"
          image="/screenShots/asanas.png"
          width="300"
          height="240"
          logo1='/logos/arduino-logo.svg'
          logo2='/logos/arduino-logo.svg'
          logo3='/logos/arduino-logo.svg'
          
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
