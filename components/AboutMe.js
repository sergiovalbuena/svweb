import React from 'react'

export default function AboutMe() {
  return (
    <div className="Wrapper">
      <h2>Something about me</h2>
    
      <p>I'm a  from 🇨🇴, living in 🇨🇦, but feeling just a human being in such a wonderful planet 🌎.</p>
      <p>I studied Design at <a href="https://uniandes.edu.co/en">Andes Univeristy</a> then I get some professional experiences in Digital Marketing and product Design. Had the great chance to work for Sodexo, Renault, Disney, also as a Freelancer and as a Product Consultan. Now I'm a Interactive Media Developer student at <a href="https://camosun.ca/">Camosun College</a> .</p>
      {/* <p>For me is so important to do the best, also giving the extra mile, to achive that I do meditation and yoga every morning 🧘🏻‍♂️ , to have my brain 🧠  and  soul in sharped.</p> */}
      <p>I Love coding because it is my favorite way to create solutions and great experiences at same time. </p>
   
      <div className="redes">
        
      </div>
   
   
      <style jsx>{`
      .Wrapper{
        width: 100%;
        margin: 20px;
        padding: 10px;
      }
      .Wrapper p{
        padding:  0 30px 0 10px;
      }
      
      `}</style>
   
   
   
   
    </div>
  )
}
