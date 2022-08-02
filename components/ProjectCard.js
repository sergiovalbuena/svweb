import React from "react";
import Link from "next/link";
import ButtonBorder from "./ButtonBorder";
import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <div className="Wrapper">

        <div className="WrapperText">
          <h4 className="Title">{props.title}</h4>
          {/* <p className="Text">{props.text}</p> */}
      </div>
      <div className="Background">
      <Image src={props.image} alt={ props.title} width={ props.width } height={ props.height}layout='responsive'/>
      </div>
        <div className="WrapperIcons">
          <img className="Logo" src={props.logo1}></img>
          <img className="Logo" src={props.logo2}></img>
          <img className="Logo" src={props.logo3}></img>
        </div> 
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="ButtonBox">
        <ButtonBorder text='visit site'/>
        </div>
      </a>
        
        <div className="GitHubBox">
        <a href={props.linkGitHub} target="_blank" rel="noreferrer">
        <h6>

          Visit repo on GitHub
          </h6>
        </a>  
        </div>

      <style jsx>{`
        .Wrapper {
          width: 300px;
          height: 480px;
          box-shadow: 0 20px 40px rgba(0 , 0, 0, 0.1);
          padding: 15px 20px;
          border-radius:10px;
          transition: .5s ease-out;
        }
        .Wrapper:hover{
          transform: translateY(-17px); 
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);


          
          
        }
        .WrapperText {
          color: var(--dark);
        }

        .Title{
          font-size:2rem;
          margin: 15px 0;
          /* font-weight:bold; */
        }
        .Text{
          text-align:left ;
          padding:0px 5px ;
          font-size: 1.4rem;
          line-height: 1.6rem;
          
        }
        .Background{
          filter: grayscale(.8);
          transition: .5s ease-out;
          
        }
        .Background:hover{
          filter: grayscale(0);
        }
        .WrapperIcons{
          margin-top:10px;
          /* justify-content: center; */
          display: inline-grid;
          grid-template-columns: 1fr 1fr;

        }
        .WrapperIcons img{
          width: 30px;
          margin:5px;
        }
        .ButtonBox{
          display: grid;
          justify-content: center;
        }
        .GitHubBox{
          display: grid;
          justify-content: center;
         opacity: .6; 
        }
        .GitHubBox:hover{
          color: var(--cyan);
          opacity: 1;
        }

        h6{
          margin: 15px;
        }


        @media(prefers-color-scheme: dark){
          .WrapperText {
          color: var(--light);
        }
        .Wrapper {
          box-shadow: 0 20px 40px rgba(200, 200, 200, 0.1);
        }
        .Wrapper:hover{
          box-shadow: 0 20px 40px rgba(200, 200, 200, 0.25);
        }
        }


      `}</style>
    </div>
  );
}
