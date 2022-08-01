import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="Wrapper">
        <h4>© 2002, Sergio Valbuena.</h4>
        <div className="Container">
          <div>
          <h4>Home</h4>
          </div>
          <div>
          <h4>Work</h4>
          </div>
          <div>
          <h4>Contact me</h4>
          </div>
        </div>
        <div className="LogosFooter">
          
        </div>
       
      </div>



      <style jsx>{`
      footer{
        height:300px;
        width:100%;
        margin: 2rem;
        display: grid;
      }
      .Wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .Container{
        display: grid;
        justify-items: center;
        grid-template-columns: 1fr 1fr 1fr;
      }
      
      `}</style>


    </footer>

  )
}
