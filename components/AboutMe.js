import React from 'react'

export default function AboutMe() {
  return (
    <div className="Wrapper">
      <h2>Something about me</h2>
    
      <p>I&#39;m yogui 🧘🏻‍♂️, traveler 🛩, designer and developer from <span>🇨🇴 </span> , living in <span>🇨🇦</span> , but feeling just a borderless human being in such a wonderful planet <span>🌎</span>. </p>
      <p>I <span>🎓</span>  studied Design at <a href="https://uniandes.edu.co/en">  Andes Univeristy</a> then I get some professional experiences <span>👷🏽 </span>  in Digital Marketing and product Design. Had the great chance to work for Sodexo, Renault, Disney. I have expereince, also, as a Freelancer and as a Product Design Consultan. Now I&#39;m a Interactive Media Developer student <span>👨🏽‍🎓</span> at <a href="https://camosun.ca/">Camosun College</a> .</p>
      {/* <p>For me is so important to do the best, also giving the extra mile, to achive that I do meditation and yoga every morning 🧘🏻‍♂️ , to have my brain 🧠  and  soul in sharped.</p> */}
      <p>I love <span>❣️</span>  coding because it&#39;s my favorite way to create solutions and great experiences at same time. </p>
   
      <div className="redes">
        
      </div>
   
   
      <style jsx>{`

@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

      .Wrapper{
        width: 100%;
        margin: 20px;
        padding: 10px;
      }
      .Wrapper p{
        padding:  0 30px 0 10px;
        font-family: 'Nanum Pen Script', cursive;
        font-size: 2rem
      }

      .Wrapper p a{
        font-family: 'Nanum Pen Script', cursive;
        font-size: 2rem;
        text-decoration: underline;
      }
      span{
        font-size:2rem;
      }
      
      `}</style>
   
   
   
   
    </div>
  )
}
