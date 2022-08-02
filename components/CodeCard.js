import React from 'react'
import Image from "next/image";


export default function CodeCard(props) {
  return (
    <div className="CardWrapper">
    <div className="ImagenWrapper">

    <Image
      src={props.logo}
      alt={props.codeName}
      width="80"
      height="80"
     
      />
      </div>
      <h4>{props.codeName}</h4>
      

      <style jsx>{`
            .CardWrapper {
          width: 100px;
          height: 120px;
          margin: 10px 10px;
          overflow: hidden; //make a mask for the img
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          display: grid;
          justify-content: center;
          align-items: center;
          padding:8px 0 ;
          
          
        }

        .CardWrapper:hover {
          transform: translateY(-20px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          
        }
        h4{
          margin:0;
          text-align: center;
          margin-bottom: 0 ;
        }
      `}</style>


  </div>
  )
}
