import React from "react";
import eventKan from "../assets/img/event-kan.jpg";
import kodikon from "../assets/img/kodikon.jpeg";
import eventHack from "../assets/img/event-hack.jpg";
import Carousel from "react-multi-carousel";
export default function Events() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
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

  return (
    <section className="events md-5 " id="events">
      <h2 className="text-center grad-css">Events</h2>
      <div className="container  text-center">
        <Carousel
          responsive={responsive}
          infinite={true}
          className="owl-carousel owl-theme skill-slider text-center md-5 "
        >
           <div className="item container">
            <img src={kodikon} alt="could not load" id="event-img" />
            <h3>Kodikon 2.0</h3>
            <h5>
             Mentor and member of reviewing panel in a hackathon <br />{" "}
              conducted by CSE Dept and Embrione{" "}
            </h5>
          </div>
          <div className="item container">
            <img src={eventKan} alt="could not load" id="event-img" />
            <h3>Kannada Rajyostava 2022'</h3>
            <h5>
              Voluntered Kannada Rajyostava under Kannada koota club <br />{" "}
              which was a week long college fest{" "}
            </h5>
          </div>
          <div className="item">
            <img src={eventHack} alt="could not load" id="event-img" />
            <h3>Kannada Hackathon'22</h3>
            <h5>
              Kannada Hackathon is the first ever language based hackathon{" "}
              <br /> conducted in PES University. Speech Technology & NLP <br />
              I worked as one of the organiser.{" "}
            </h5>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
