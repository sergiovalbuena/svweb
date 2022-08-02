import React from "react";
import CodeCard from "./CodeCard";

export default function WorkWIth() {
  return (
    <div className="Wrapper">
      <h2>I have been coding with </h2>
      <CodeCard logo='/logos/js-logo.svg' codeName='JavaScript'/>
      <CodeCard logo='/logos/csharp-logo.svg' codeName='C #'/>
      <CodeCard logo='/logos/figma-logo.svg' codeName='Figma'/>
      <CodeCard logo='/logos/terminal-logo.svg' codeName='Shell'/>
      <CodeCard logo='/logos/react-logo.svg' codeName='React'/>
      <CodeCard logo='/logos/unity-logo.svg' codeName='Unity'/>
      <CodeCard logo='/logos/firebase-logo.svg' codeName='Firebase'/>
      <CodeCard logo='/logos/Arduino-logo.svg' codeName='Arduino'/>
      <CodeCard logo='/logos/nodejs-logo.svg' codeName='Node JS'/>
      <CodeCard logo='/logos/xd-logo.svg' codeName='AdobeXD'/>
      <CodeCard logo='/logos/mongo-logo.svg' codeName='Mongo'/>
      <CodeCard logo='/logos/ae-logo.svg' codeName='After Effects'/>

      <style jsx>{`

      .Wrapper{
        height:auto;
        width:100%;
        margin: 20px 20px;
      }
  
      `}</style>
    </div>
  );
}
