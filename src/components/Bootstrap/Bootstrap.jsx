import { Carousel, Container, Row, Col, Accordion } from "react-bootstrap";
import "./Bootstrap.css";

import image from "../../assets/images/sql_psite.png";
import image2 from "../../assets/images/csharp_psite.png";
import image3 from "../../assets/images/react_psite.png";
import image4 from "../../assets/images/marineashton.jpg"


export default function Bootstrap() {
  return (
    <>
      <section className="bootstrap">
        <main>
          <Carousel controls={false} fade variant="dark">
            <Carousel.Item>
              {/* Image and caption */}
              <img src={image} alt="First Slide" className="d-block w-100" />
              <Carousel.Caption>
                <h3>SQL</h3>
                <p>A programming language for storing and processing information in a relational database</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* Image and caption */}
              <img src={image2} alt="Second Slide" className="d-block w-100" />
              <Carousel.Caption>
                <h3>C#</h3>
                <p>A programming language that's used to create a variety of programs, including mobile apps, video games, and enterprise software</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* Image and caption */}
              <img src={image3} alt="Third Slide" className="d-block w-100" />
              <Carousel.Caption>
                <h3>React</h3>
                <p>An open-source JavaScript library that allows developers to create user interfaces for web and mobile applications</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div class="about-section">
      <h1> About Me </h1>
      <h2>Who I Am And How I Got Into Developmental Programming!</h2>
      
    
</div>

<div class="container">
  <div class="title text-center">
    <div class="card">
      <div class="row">
        <div class="col-md-4">
        <img class="img-fluid rounded-start" src={image4} alt="">
    </img></div>
    
    <div class="col-md-8">
      <div class="card-body">
        <h3>My Time As a Marine</h3>
        <p>My name is Ashton Hammers and I am a student at Centriq. Before becoming a student at Centriq I was a Marine stationed in San Diego California. While I was in California I discovered my interest in programming by seeing individuals in my platoon coding their own games and mods for them. Then after it was a decision I made when I left the military to find a program that offers the teaching of fundamental programming skills. (I would also happen to be pictured on the right!)</p>
         </div>
        </div>
     </div>
    </div>
  </div>
</div>      
              </main>
      </section>
    </>
  );
}
