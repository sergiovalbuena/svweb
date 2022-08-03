import React from "react";
import ProjectCard from "./ProjectCard";

export default function Work(props) {
  return (
    <div className="ContainerWrapper">
      <h2>Here is some of my work.</h2>
      <div className="CardWrapper">
        <div>
          <ProjectCard
            title="Asanas Yoga 🧘🏼‍♀️"
            text="The beta version, with svg animation and cool hovers"
            link="https://yogananda.netlify.app/"
            linkGitHub="https://www.github.com/"
            image="/screenShots/asanas.png"
            width="300"
            height="240"
            logo1="/logos/figma-logo.svg"
            logo2="/logos/react-logo.svg"
          />
        </div>
        <div>
          <ProjectCard
            title="Rick And Morthy - DOM"
            text="Calling Rick And Morthy API and rendering result on the front"
            link="https://sergiovalbuena.github.io/react-rick-and-morty/"
            linkGitHub="https://www.github.com/"
            image="/screenShots/RickAndMorty.png"
            width="300"
            height="240"
            logo1="/logos/js-logo.svg"
            logo2="/logos/vite-logo.svg"
            
          />
        </div>
        <div>
          <ProjectCard
            title="Avocado 🥑 Api "
            text="Using Next.js to create my own API and rendering through DOM"
            link="https://avoapp.vercel.app"
            linkGitHub="https://www.github.com/"
            image="/screenShots/AvoApi.png"
            width="300"
            height="240"
            logo1="/logos/js-logo.svg"
            logo2="/logos/react-logo.svg"
          />
        </div>
        <div>
          <ProjectCard
            title="Movies 🍿 API "
            text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
            link="https://www.github.com/"
            linkGitHub="https://www.github.com/"
            image="/screenShots/moviesAPI.png"
            width="300"
            height="240"
            logo1="/logos/figma-logo.svg"
            logo2="/logos/js-logo.svg"
          />
        </div>
        <div>
          <ProjectCard
            title="La Taqueria 🌮 "
            // text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
            link="https://lataqueria-admin.netlify.app/signin"
            linkGitHub="https://www.github.com/"
            image="/screenShots/LaTaqueria.png"
            width="300"
            height="240"
            logo1="/logos/figma-logo.svg"
            logo2="/logos/vuejs-logo.svg"
          />
        </div>
        <div>
          <ProjectCard
            title="Prep List "
            // text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
            link="https://rjsy23.csb.app/"
            linkGitHub="https://www.github.com/"
            image="/screenShots/preplist.png"
            width="300"
            height="240"
            logo1="/logos/figma-logo.svg"
            logo2="/logos/js-logo.svg"
          />
        </div>
        <div>
          <ProjectCard
            title="Batata Bit "
            // text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
            link="https://batatabit-responsive.netlify.app/"
            linkGitHub="https://www.github.com/"
            image="/screenShots/batata.png"
            width="300"
            height="240"
            logo1="/logos/figma-logo.svg"
            logo2="/logos/js-logo.svg"
          />
        </div>
        <div>
          <ProjectCard
            title="Rabbit Land "
            // text="Este es el primer proyecto, ayudo a solucionar x cosa en x lado"
            link="https://rabbitland.netlify.app/"
            linkGitHub="https://www.github.com/"
            image="/screenShots/rabbitLand.png"
            width="300"
            height="240"
            logo1="/logos/figma-logo.svg"
            logo2="/logos/js-logo.svg"
          />
        </div>
      </div>

      <style jsx>{`
        .ContainerWrapper {
          width: 100%;
        }
        .CardWrapper {
          padding: 10px 20px;
          overflow: auto;
          white-space: nowrap;
        }
        .CardWrapper div {
          display: inline-block;
          text-align: center;
          padding: 14px;
          text-decoration: none;
        }
        h2{
          text-align: left;
          padding-left: 3rem;
        }
      `}</style>
    </div>
  );
}
