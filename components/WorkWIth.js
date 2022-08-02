import React from "react";
import CodeCard from "./CodeCard";

export default function WorkWIth() {
  return (
    <div className="Wrapper">
      <h2>I've been coding with </h2>
      <CodeCard logo='/logos/js-logo.svg' codeName='JavaScript'/>
      <CodeCard logo='/logos/csharp-logo.svg' codeName='C #'/>
      <CodeCard logo='/logos/figma-logo.svg' codeName='Figma'/>
      <CodeCard logo='/logos/terminal-logo.svg' codeName='Shell'/>
      <CodeCard logo='/logos/react-logo.svg' codeName='React'/>
      <CodeCard logo='/logos/unity-logo.svg' codeName='Unity'/>
      <CodeCard logo='/logos/firebase-logo.svg' codeName='Firebase'/>
      <CodeCard logo='/logos/terminal-logo.svg' codeName='Shell'/>
      <CodeCard logo='/logos/terminal-logo.svg' codeName='Shell'/>
      <CodeCard logo='/logos/terminal-logo.svg' codeName='Shell'/>
      <CodeCard logo='/logos/terminal-logo.svg' codeName='Shell'/>
      <CodeCard logo='/logos/terminal-logo.svg' codeName='Shell'/>

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
