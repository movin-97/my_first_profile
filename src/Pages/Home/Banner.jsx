import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../Assets/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg";
import Image2 from "../../Assets/paulius-andriekus-552Vm3_Ah6A-unsplash.jpg";
import Image3 from "../../Assets/alexander-shatov-mr4JG4SYOF8-unsplash.jpg";
import { Button, Container } from "react-bootstrap";



function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Image1}
        alt="First Image"
        height="350"
        style={{
          height: 400,
          objectFit: "cover",
        }}
      />
      <Carousel.Caption>
        <h2>Looking for React Developer</h2>
        <p className="d-none d-md-block">
          Vue. js developers are mainly responsible for the front-end
          development of a web application. Vue. js is a popular framework
          among front-end developers because of its adaptability and easy
          integration with other libraries and existing projects.
        </p>

        <Button variant="outline-light" className="mb-4">
          React Demo
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Image2}
        alt="Second slide"
        height="350"
        style={{
          height: 400,
          objectFit: "cover",
        }}
      />

      <Carousel.Caption>
        <h2>Looking for Vue Developer</h2>
        <p className="d-none d-md-block">
          A React developer designs and creates JavaScript-based
          applications for web or mobile environments. They typically
          specialize in front-end development. React is an open-source
          JavaScript library. It is sometimes referred to as React.
        </p>

        <Button variant="outline-light" className="mb-4">
          Vue Demo
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Image3}
        alt="Third slide"
        height="350"
        style={{
          height: 400,
          objectFit: "cover",
        }}
      />

      <Carousel.Caption>
        <h2>Looking for Figma Designer</h2>
        <p className="d-none d-md-block">
          Figma is a collaborative browser-based interface design tool, with
          additional offline features enabled by desktop applications for
          macOS and Windows. The Figma mobile app for Android and iOS allows
          viewing and interacting with Figma prototypes in real-time on
          mobile and tablet devices.
        </p>

        <Button variant="outline-light" className="mb-4">
          Figma Demo
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    
  );
}

export default Banner;