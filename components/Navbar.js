import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const menuData = [
  {
  title: 'Work',
  icon: '/code.svg',
    link:"/#work",
},
  {
    title: 'About me',
    icon: '/book.svg',
    link:"/#about",
  },
  {
    title: 'Contact me',
    icon: '/livestreams.svg',
    link:"/#contact",
  }]

export default function Navbar() {
  
  return (
    <div className='Wrapper'>
      <Link href='/'>
      <h3 className='LogoName'>Sergio Valbuena</h3>
      </Link>
      <div></div>
      <div className='MenuWrapper' count={menuData.length}>
        {menuData.map((item, index) => (
          <div className='MenuItem' key={index}>
            <Link href={item.link} key={index}>
              <>
                <div className="Icono">
                  
                <Image src={item.icon} alt={item.title}  width={20}
      height={20}
      layout="fixed">
            </Image> 
                  </div>
          <ol className='Boton'>{item.title}</ol>
          </>
          </Link>
          </div>
      ))}
      </div>
     


      <style jsx>{`
      .Wrapper{
        position:absolute;
        
        display:grid;
        grid-template-columns: 25% 35% 40%;
        width:100%;
        justify-content: space-between;
        padding: 0 4rem;
        align-items: center;

        box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);

      }
      .Boton{
        padding:.8rem ;
      }
      .MenuWrapper{
        display: grid;
        gap:2rem;
        grid-template-columns: repeat(3, auto);
      justify-content: center;
      }
      ol{
        font-size:1.2rem;
      }
      .MenuItem{
        display: grid;
        align-items: center;
        padding: 0 20px ;
        grid-template-columns:15% 85%;
        justify-items: center;
      }
      .MenuItem:hover{
        border-radius:1rem;
        background: white;
        cursor: pointer;
        transition: .5s ease-out;
        border-radius:1rem;
      }
      .LogoName:hover{
        color:var(--cyan);
      }
      .Icono{
        background:var(--dark) ;
        border-radius:5px;
        padding: 1px;
      }

      @media(max-width:450px){
        .Wrapper{
          padding: 0 2rem;
        }
      }


      @media(prefers-color-scheme: dark){
        .MenuItem:hover{
        background: black;
        color: var(--cyan);
        font-weight:bold;
       }
       .Wrapper{
        box-shadow: 0px 50px 100px rgba(200, 200, 200, 0.12),
    inset 0 0 0 0.5px rgba(0, 0, 0, 0.2);
       }
       .Icono{
        background:none ;
        border-radius:5px;
        padding: 1px;
      }
      }


      `}</style>
    </div>
  )
}
