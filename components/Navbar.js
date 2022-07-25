import Link from 'next/link'
import React from 'react'


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
    title: 'About Me',
    icon: '/public/logos/code.svg',
    link:"/",
  }]

export default function Navbar() {
  return (
    <div className='Wrapper'>
      <h3 className='LogoName'>Sergio Valbuena</h3>
      <div className='MenuWrapper'>
      {menuData.map((item, index) => (
        <Link href={item.link} key={index}>
          <div className='MenuItem'>
          <img src={item.icon} alt={item.title} >
            </img>
          {item.title}
          </div>
          </Link>
      ))}
      </div>


      <style jsx>{`
      .Wrapper{
        position:absolute;
        top: 3rem;
        display:grid;
        grid-template-columns: 30% 70%;
        width:100%;
        justify-content: space-between;
        padding: 0 30px;
        align-items: center;
      }
      .MenuWrapper{
        display: grid;
        grid-template-columns: repeat(3, auto);
        
      }
      .MenuItem{
        display: grid;
        grid-template-columns: 2rem auto;
      }

      .LogoName{

      }
      `}</style>
    </div>
  )
}
