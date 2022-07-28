import React from "react";
import Link from "next/link";
import Image from 'next/image'
import ButtonBorder from "./ButtonBorder";

export default function ProjectCard(props) {
  return (
    <div className="Wrapper" src={props.image}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <Image className="Background" src={props.image} layout='fill'/>

        <div className="WrapperText">
          <h4 className="Title">{props.title}</h4>
          <p className="Text">{props.text}</p>
        </div>
        {/* <div className="WrapperIcons">
          <img className="Logo" src={props.logo2}></img>
          <img className="Logo" src={props.logo1}></img>
          <img className="Logo" src={props.logo3}></img>
        </div> */}
        <ButtonBorder text='visit site' />
      </a>

      <style jsx>{`

 


        .Wrapper {
          width: 300px;
          height: 369px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          padding: 15px 20px;
          border-radius:10px;
          transition: 1s;
        }
        .Wrapper:hover{
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          
        }
        .Background{
          width:100%;
          height:100%;
        }
        .Title{
          font-size:2rem;
          margin: 0;
          /* font-weight:bold; */
        }
        .Text{
          text-align:left ;
          padding:0px 5px ;
          font-size: 1.4rem;
          line-height: 1.6rem;
          
        }
        

      `}</style>
    </div>
  );
}
