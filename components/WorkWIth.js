import React from "react";
import CodeCard from "./CodeCard";

export default function WorkWIth() {
  return (
    <div className="Wrapper">
      <h2>I have been coding with </h2>
      <div className="Container">

      <CodeCard logo='/logos/figma-logo.svg' codeName='Figma'/>
      <CodeCard logo='/logos/js-logo.svg' codeName='JavaScript'/>
      <CodeCard logo='/logos/react-logo.svg' codeName='React'/>
      <CodeCard logo='/logos/csharp-logo.svg' codeName='C #'/>
      <CodeCard logo='/logos/unity-logo.svg' codeName='Unity'/>
      <CodeCard logo='/logos/terminal-logo.svg' codeName='Shell'/>
      <CodeCard logo='/logos/nextjs-logo.svg' codeName='Next.JS'/>
      <CodeCard logo='/logos/firebase-logo.svg' codeName='Firebase'/>
      <CodeCard logo='/logos/Arduino-logo.svg' codeName='Arduino'/>
      <CodeCard logo='/logos/nodejs-logo.svg' codeName='Node JS'/>
      <CodeCard logo='/logos/xd-logo.svg' codeName='AdobeXD'/>
      <CodeCard logo='/logos/mongo-logo.svg' codeName='Mongo DB'/>
      <CodeCard logo='/logos/illustrator-logo.svg' codeName='Illustrator'/>
      <CodeCard logo='/logos/photoshop-logo.svg' codeName='Photoshop'/>
      <CodeCard logo='/logos/ae-logo.svg' codeName='After Effects'/>
      </div>

      <style jsx>{`

      .Wrapper{
        height:auto;
        width:100%;
        margin: 20px 20px;
      }
      .Container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
       
        padding: 0 40px 0 20px ;
      }
  
      `}</style>
    </div>
  );
}
