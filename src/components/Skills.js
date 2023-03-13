import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skills" id="skills">
      <h2 className="mb-1 text-center grad-css">Skills</h2>
      <p className="text-center ">My Technical Skills</p>
      <div className="container d-flex justify-content-evenly">
        <div className="container text-center me-5">
          <h3 class="skills_title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-code-slash text-info fw-bold"
              viewBox="0 0 16 16"
            >
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
           &nbsp; Languages & Frameworks
          </h3> 
          <img src="https://skillicons.dev/icons?i=c,cpp,py,html,css,js,mongodb,django,flutter,dart,firebase,nextjs,redis,redux,regex,jquery,express,tensorflow,nodejs,tailwind,bootstrap,react,figma&theme=dark&perline=6" alt="could not load" />
        </div>
        <div className="container text-center">
          <h3 class="skills_title">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-gear-fill text-info" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg> Tools & Software</h3> 
<img src="https://skillicons.dev/icons?i=vscode,codepen,netlify,unity,materialui,androidstudio,wordpress,githubactions,svg,heroku,arduino,vercel,git,ps,linux,github&theme=dark&perline=6" alt="could not load" />
        </div>
      </div>
      <div className="container">
      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider text-center ">
                            <div className="item">
                                <img src={meter1} alt="could not load" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="could not load" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="could not load" />
                                <h5>MERN Stack</h5>
                            </div>
                            <div className="item ">
                                <img src={meter2} alt="could not load" />
                                <h5 >Data Structures</h5>
                            </div>
                           
                            
                            <div className="item">
                                <img src={meter3} alt="could not load" />
                                <h5>UI/UX</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="could not load" />
                                <h5>Computer Vision</h5>
                            </div>
                        </Carousel>
      </div>
    </section>
  );
}
