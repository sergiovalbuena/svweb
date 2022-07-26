import React from 'react'

export default function Button() {
  return (
    <div>
      <button>

      Button
      </button>
    
      <style jsx>{`
      button{
        padding:1rem 4rem;
        border-radius:.6rem;
        border: .5px solid;
        cursor:pointer;
        margin-top: 2rem;
        transition: .5s ease-out;
      }
      button:hover{
        padding:1.2rem 6rem;
      }
      
      @media(prefers-color-scheme: dark){
      button{
          border: .5px;
        }
      }
      `}</style>
      
    </div>


  )
}
