import Link from 'next/link'
import React from 'react'


// const menuData = [
//   { title: 'Home', icon: '../public/fileName.svg', link: '/' },
//   { title: 'Work', icon: '../public/work.svg', link: '/#work' },
//   { title: 'About Me', icon: '../public/aboutMe.svg', link: '/#about' },
//   { title: 'Contact Me', icon: '../public/contactMe.svg', link: '/#contact' },
  
// ]

const menuData = ["Courses", "Tutorial", "Livestream"]

export default function Navbar() {
  return (
    <div className='Wrapper'>
      {menuData.map(item => (
        <p>{item}</p>
      ))}
    </div>
  )
}
