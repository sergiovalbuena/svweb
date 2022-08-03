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
        margin: 0rem;
        display: grid;
        background: white;
        
      }
      .Wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: center;
        margin:2rem;
      }
      .Container{
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .Container div{
        padding: 10px;
      }

      @media(prefers-color-scheme: dark){
        footer{
          background: black;
        }
      }

      @media(max-width:700px){
        .Wrapper{
          grid-template-columns: 1fr;
        }
      }
      
      `}</style>


    </footer>

  )
}
