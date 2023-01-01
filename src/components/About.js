import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";
import myPhoto from "../assets/img/myPhoto.png";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <span className="mb-3">My intro</span>
              <h2 className="mb-5 grad-css">About Me</h2>
              <div className="d-flex " id="about_me">
                <div className="container">
                  I am Nandish N S, currently a sophomore at{" "}
                  <b> PES University </b>, Bangalore pursuing <b> B.Tech</b> in{" "}
                  <b>Computer Science and Engineering.</b>
                  <br />
                  A Tech Enthusiastic person with a zeal for coding, innovation,
                  designing, developing and experimenting in various domains of
                  technology. <br />
                  Right now I'm improving my skills in App Developement (React
                  Native & Flutter) , Computer Vision and Machine Learning. <br /> <br />
                  <a type="button" href='https://www.linkedin.com/in/nandish-n-s-bb3882230/' target='_blank' class="btn btn-info btn-lg">
                    Resume{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="container">
                  <img src={myPhoto} className="about_img" alt="myphoto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
