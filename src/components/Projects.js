
import Carousel from "react-multi-carousel";

import colorSharp2 from "../assets/img/color-sharp2.png";
import virtual_cal from "../assets/img/virt_cal.png"
import "animate.css";


export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // const projects = [
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: speech,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg1,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   },
  // ];

  return (
    <section className="project" id="projects">
      <h2 className=" h2 grad-css">Projects</h2>
      <h4 className="h4 text-center">My Works</h4>
       <div className="container">
                            <Carousel
                              responsive={responsive}
                              infinite={true}
                              className="owl-carousel owl-theme  skill-slider "
                            >
                               <div className="item text-center">
                                <div className="container ">
                                  <div className="proj-imgbx">
                                    <img
                                      src="https://user-images.githubusercontent.com/92267208/195142183-70f1e548-2eac-4f9a-a3ec-998f8cc39f53.png"
                                      alt="could not load"
                                      className="proj-image-img"
                                      
                                    />
                                    <div className="proj-txtx">
                                      <h3>Fashop</h3>
                                      <h5>2021</h5>
                                    </div>
                                    <h3>Shopping Website</h3>
                                  </div>
                                  <p>
                                    <span>Technologies:</span> <br /> <br />
                                    <img
                                      src="https://skillicons.dev/icons?i=html,css,js,jquery,bootstrap,figma&theme=dark&perline=7"
                                      alt="could not load"
                                    />
                                  </p>
                                  <a
                                    href="https://github.com/Nandish2021/fashop.com"
                                    target="_blank" rel="noreferrer"
                                    className="btn btn-info fw-bold fs-4"
                                  >
                                    View
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-box-arrow-up-right ms-2"
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
                              </div>
                              <div className="item text-center">
                                <div className="container ">
                                  <div className="proj-imgbx">
                                    <img
                                      src={virtual_cal}
                                      alt="could not load"
                                      className="proj-image"
                                    />
                                    <div className="proj-txtx">
                                      <h3>Virtual Scientific Calculator</h3>
                                      <h5>2021</h5>
                                    </div>
                                    <h3>Virtual Scientific Calculator</h3>
                                  </div>
                                  <p>
                                    <span>Technologies:</span> <br /> <br />
                                    <img
                                      src="https://skillicons.dev/icons?i=py,vscode&theme=dark&perline=7"
                                      alt="could not load" style={{width:'20%'}}
                                    /> 
                                  </p>
                                  <a
                                    href="https://github.com/Nandish2021/fashop.com"
                                    target="_blank" rel="noreferrer"
                                    className="btn btn-info fw-bold fs-4 me-2"
                                  >
                                    View 
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-box-arrow-up-right  ms-2"
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
                              </div>
                              <div className="item text-center">
                                <div className="container ">
                                  <div className="container ">
                                    <img
                                      src="data:image/jpeg;base64,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"
                                      alt="could not load"
                                      className="proj-image"
                                      
                                    />
                                    
                                    <h3>Ambulance Detection</h3>
                                    <h5>2022</h5>
                                    <p> 
                                      Detection done using ANN ( Artifical Neural Network) with momentum for identifying emergency vehicles which inturn helps in smart traffic control to operate on signals,
                                    </p>
                                  </div>
                                  <p>
                                    <span>Technologies:</span> <br /> <br />
                                    <img
                                      src="https://skillicons.dev/icons?i=py,ai,tensorflow&theme=dark&perline=7"
                                      alt="tech" style={{width:'25%'}}
                                    />
                                  </p>
                                  <a
                                    href="https://github.com/Nandish2021/Classrooms-for-Assignment-Submission-with-online-compiler-Support"
                                    target="_blank" rel="noreferrer"
                                    className="btn btn-info fw-bold fs-4"
                                  >
                                    View
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-box-arrow-up-right  ms-2"
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
                              </div>
                              <div className="item text-center">
                                <div className="container d-flex">
                                  <div className=" proj-imgbx">
                                    {/* <img src={speech} alt="Image" className="proj-image" /> */}
                                  </div>
                                  <div className="text-center">
                                    <h3>
                                      
                                      Speech Recognition <br /> React App.
                                    </h3>
                                    <h5>2022</h5>
                                    <p>
                                      React based app which converts
                                      Speech-to-text and Text-to-Speech. The
                                      speech to text system works with a speech
                                      recognition system; <br /> which
                                      recognizes your voice and convert it into
                                      text.
                                    </p>
                                    <p>
                                      <span>Technologies:</span> <br /> <br />
                                      <img
                                        src="https://skillicons.dev/icons?i=html,css,js,jquery,bootstrap,react,figma&theme=dark&perline=7"
                                        alt="could not load"
                                      />
                                    </p>
                                    <a
                                      href="https://react-speech.netlify.app"
                                      target="_blank" rel="noreferrer"
                                      className="btn btn-info fw-bold fs-4"
                                    >
                                      View
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-box-arrow-up-right  ms-2"
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
                                </div>
                              </div>
                              <div className="item text-center">
                                <div className="container ">
                                  <div className="proj-imgbx">
                                    <img
                                      src='https://www.efkonindia.com/images/how-atcs-system-works.jpg'
                                      alt="could not load"
                                      className="proj-image" style={{height:'auto' } }
                                    />
                                    <div className="proj-txtx">
                                      <h3>Automated Traffic Control</h3>
                                      <h5>2022</h5>
                                    </div>
                                    <h3>Automated-Traffic-Control-Using-DL-and-Arduino </h3>
                                    
                                  </div>
                                  <p>Smartly Switches signals based on the relative-densities</p>
                                  <p>
                                    <span>Technologies:</span> <br /> <br />
                                    <img
                                      src="https://skillicons.dev/icons?i=py,arduino,cpp&theme=dark&perline=7"
                                      alt="tech" style={{width:'20%'}}
                                    /> 
                                  </p>
                                  <a
                                    href="https://github.com/Nandish2021/fashop.com"
                                    target="_blank" rel="noreferrer"
                                    className="btn btn-info fw-bold fs-4 me-2"
                                  >
                                    View 
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-box-arrow-up-right  ms-2"
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
                                </div> </div>
                              <div className="item text-center">
                                <div className="container d-flex">
                                  <div className=" proj-imgbx">
                                    {/* <img
                                      src={speech}
                                      alt="Image"
                                      className="proj-image"
                                    /> */}
                                  </div>
                                  <div className="text-center">
                                    
                                    <h3>Virtual Classroom</h3>
                                    <h4>2022</h4>
                                    <p>
                                      A portal where user can create class/join
                                      class and assign/submit assignments.{" "}
                                      <br />
                                      The portal also supports online compiler
                                      support, coding assignments and online
                                      test could be held.
                                    </p>
                                    <p>
                                      <span>Technologies:</span> <br /> <br />
                                      <img
                                        src="https://skillicons.dev/icons?i=react,nodejs,mongodb,express,html,css,js,jquery,bootstrap&theme=dark&perline=7"
                                        alt="could not load"
                                      />
                                    </p>
                                    <a
                                      href="https://github.com/Nandish2021/Classrooms-for-Assignment-Submission-with-online-compiler-Support"
                                      target="_blank" rel="noreferrer"
                                      className="btn btn-info fw-bold fs-4"
                                    >
                                      View
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-box-arrow-up-right  ms-2"
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
                                </div>
                              </div>
                             
                          
                            </Carousel>
                          </div>
      <img className="background-image-right" alt="could not load" src={colorSharp2}></img>
    </section>
  );
};
