import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useState } from "react";

const SkillsCard = () => {
  const [cardItem, setCardItem] = useState([
    {
      id: 1,
      title: "React Js",
      img: "https://patterns.dev/img/reactjs/react-logo@3x.svg",
      dsc: "A React developer designs and creates JavaScript-based applications for web or mobile environments. They typically specialize in front-end development. React is an open-source JavaScript library. It is sometimes referred to as React.js or ReactJS. In programming, libraries serve as toolkits for developers. Their contents may include configuration data, prewritten code, and message templates.",
    },
    {
      id: 1,
      title: "React Js",
      img: "https://patterns.dev/img/reactjs/react-logo@3x.svg",
      dsc: "A React developer designs and creates JavaScript-based applications for web or mobile environments. They typically specialize in front-end development. React is an open-source JavaScript library. It is sometimes referred to as React.js or ReactJS. In programming, libraries serve as toolkits for developers. Their contents may include configuration data, prewritten code, and message templates.",
    },
    {
      id: 1,
      title: "React Js",
      img: "https://patterns.dev/img/reactjs/react-logo@3x.svg",
      dsc: "A React developer designs and creates JavaScript-based applications for web or mobile environments. They typically specialize in front-end development. React is an open-source JavaScript library. It is sometimes referred to as React.js or ReactJS. In programming, libraries serve as toolkits for developers. Their contents may include configuration data, prewritten code, and message templates.",
    },
  ]);

  return (
    <div className="mt-3">
      <Row>
        <h2 className="text-center">Trending Js Framework</h2>
      </Row>
      <Row>
        {cardItem.map((card) => {
          return (
            <Col>
              <Card className="bg-dark text-white" key={card.id}>
                <Card.Img src={card.img} alt={card.title} />
                <Card.ImgOverlay>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.dsc}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SkillsCard;
