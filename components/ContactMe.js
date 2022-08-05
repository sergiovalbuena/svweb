import React from "react";
import Button from "./Button";
import ButtonBorder from "./ButtonBorder";

export default function ContactMe() {
  return (
    <div className="Wrapper">
      <h2>Contact me</h2>

      <h2 className="SpecialH2">Let&#39;s do some awesome work together 🎉</h2>
      <a href='mailto:yosergio.valbuena@google.com ' target="_blank" rel="noreferrer" >
      <Button text="Contact Me 💬" />
      </a>
      <a
        href="mailto:yosergio.valbuena@google.com "
        target="_blank"
        rel="noreferrer"
      >
        <ButtonBorder text="Say Hi 👋🏼" />
      </a>

      <style jsx>{`
        .Wrapper {
          margin: 20px 30px;
          padding-bottom: 50px;
        }
        .SpecialH2 {
          padding: 20px 20px 0 20px;
          font-weight: 200;
        }
      `}</style>
    </div>
  );
}
