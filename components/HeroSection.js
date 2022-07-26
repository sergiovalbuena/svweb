export default function HeroSection() {
  return (
    <div className="Wrapper">
      <div className="WaveGround" />
      <div className="ContentWrapper">
        <div className="TextWrapper">
          <h1 className="Title">
            Hi 👋🏼, I am <br /> <span>UX Designer and Frontend Developer👨🏻‍💻.</span>
          </h1>
          <p className="Description">
            UX Designer and Frontend Developer👨🏻‍💻.
            <br />
            Creating awesome experiences and amazing products.
          </p>
        </div>
      </div>

      <style jsx>{`
        .Wrapper {
          /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */
          /* background: var(--light) ; */
          overflow: hidden;
        }
        .ContentWrapper {
          max-width: 1294px;
          height: 750px;
          margin: 0 auto;
          padding: 200px 40px;
          display: grid;
          grid-template-columns: 360px auto;

          //change columns per row in mobile size:
  
        }
        @media (max-width: 450px){
        .ContentWrapper{
            grid-template-columns: auto;
            gap: 60px;
            padding: 150px 20px 250px;
          }
          .Title{
            font-size: 48px;
          }
        }

        .TextWrapper {
          max-width: 360px;
          display: grid;
          gap: 10px;
          
         
          > * {
            opacity: 0;
          }
        }
        .Title {
          font-weight: bold;
          place-self: center;
          background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        span {
            /* background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%); */
            background-clip: text;
            -webkit-background-clip: text;
            color: red;
          }

        .Description {
          font-size: 16px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
