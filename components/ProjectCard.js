import React from "react";
import Link from "next/link";
import ButtonBorder from "./ButtonBorder";

export default function ProjectCard(props) {
  return (
    <div className="Wrapper" src={props.image}>
      <a href={props.link} target="_blank">
        <img className="Background" src={props.image} />

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
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          padding: 15px 20px;
          border-radius:10px;
        }
        .Title{
          font-size:2rem;
          margin: 0;
          /* font-weight:bold; */
        }
        .Text{
          text-align:left ;
          padding:0px 5px ;
        }
        

      `}</style>
    </div>
  );
}
