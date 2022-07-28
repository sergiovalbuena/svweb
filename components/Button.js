import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button>

        { props.text}
      </button>
    
      <style jsx>{`
      button{
        padding:1rem 4rem;
        border-radius:.6rem;
        border: .5px solid;
        cursor:pointer;
        margin-top: 2rem;
        font-size: 1.6rem;
        background: var(--cyan);
        color: white;
        font-weight: bold;
        transition: .5s ease-out;
        
      }
      button:hover{
        padding:1.2rem 6rem;
      }
      
      @media(prefers-color-scheme: dark){
      button{
          border: none;
          background-color:var(--cyan);
          color: white;
          
        }
      }
      `}</style>
      
    </div>


  )
}
