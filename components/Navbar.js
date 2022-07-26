import Link from 'next/link'
import React from 'react'
import MenuTooltip from './MenuTooltip'


const menuData = [
  {
  title: 'Work',
  icon: '/favicon.svg',
    link:"/#work",
},
  {
    title: 'Tutorial',
    icon: '../public/logos/book.svg',
    link:"/",
  },
  {
    title: 'About me',
    icon: '/public/logos/code.svg',
    link:"/",
  }]

export default function Navbar() {
  return (
    <div className='Wrapper'>
      <h3 className='LogoName'>Sergio Valbuena</h3>
      <div></div>
      <div className='MenuWrapper' count={menuData.length}>
        {menuData.map((item, index) => (
          <div className='MenuItem'>
        <Link href={item.link} key={index} >
          {/* <img src={item.icon} alt={item.title} >
            </img> */}
          <p >{item.title}</p>
        
          </Link>
          </div>
      ))}
      </div>
      <MenuTooltip/>


      <style jsx>{`
      .Wrapper{
        position:absolute;
        top: 3rem;
        display:grid;
        grid-template-columns: 25% 35% 40%;
        width:100%;
        justify-content: space-between;
        padding: 0 4rem;
        align-items: center;
      }
      .MenuWrapper{
        display: grid;
        gap:2rem;
        grid-template-columns: repeat(3, auto);
      
      }
      .MenuItem{
        display: grid;
        align-items: center;
        padding:  .2rem ;
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
      }


      `}</style>
    </div>
  )
}
