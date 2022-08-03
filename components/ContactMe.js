import React from 'react'
import Button from './Button'
import ButtonBorder from './ButtonBorder'

export default function ContactMe() {
  return (
    <div className="Wrapper">
      <h2>Contact me</h2>
      
        <h2 className="SpecialH2">Let&#39;s do some awesome work together 🎉</h2>
      <Button text='Contact Me 💬' />
      <ButtonBorder text='Say Hi 👋🏼' />
      



      <style jsx>{`
      .Wrapper{
        margin: 20px 30px;
        padding-bottom:50px;
      }
      .SpecialH2{
        padding: 20px 20px 0 20px;
        font-weight:200;
      }
      
      `}</style>


    </div>
  )
}
