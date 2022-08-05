import React from "react";


export default function ButtonBorder(props) {
  return (
    <div>
     
        <button>{props.text}</button>
    

      <style jsx>{`
        button {
          padding: 1rem 4rem;
          border-radius: 0.6rem;
          border: 0.5px solid;
          cursor: pointer;
          margin-top: 2rem;
          transition: 0.5s ease-out;
          font-size: 1.6rem;
          border: solid 1px var(--cyan);
          color: white;
          font-weight: bold;
          color: var(--cyan);
        }
        button:hover {
          padding: 1rem 6rem;
        }

        @media (prefers-color-scheme: dark) {
          button {
            border: solid 1px var(--cyan);
            background: none;
            color: white;
          }
        }
      `}</style>
    </div>
  );
}
