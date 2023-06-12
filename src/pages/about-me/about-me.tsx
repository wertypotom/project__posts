import React from "react";
import { Card } from "react-bootstrap";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>Andrey Povstyanko - Middle Frontend developer</Card.Title>
        <Card.Text>
          This was a simple app, besides required stack I added Typescript
        </Card.Text>
        <Card.Text>
          See my resume at:{" "}
          <a
            href="https://hh.kz/resume/dfd191efff080fb0550039ed1f3930354c7565"
            target="blank"
          >
            HeadHunter
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutMe;
