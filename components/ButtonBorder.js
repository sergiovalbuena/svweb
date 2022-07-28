import React from "react";
import Link from "next/link";

export default function ButtonBorder(props) {
  return (
    <Link href={ props.link}>
      <div className="ButtonBorder">
        <a href={props.link}>{props.text}</a>

        <style jsx>{`
          a {
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
            background-color: none;
          }
          a:hover {
            padding: 1rem 0 0 6rem;
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
    </Link>
  );
}
