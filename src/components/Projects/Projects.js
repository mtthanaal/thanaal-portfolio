import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TheUniversityRequiresAProgram from "../../Assets/Projects/TheUniversityRequiresAProgram .png";
import WestminsterShoppingManager from "../../Assets/Projects/WestminsterShoppingManager.png";
import aidexpress from "../../Assets/Projects/aidexpress.png";
import ConsoleHub from "../../Assets/Projects/ConsoleHub.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aidexpress}
              isBlog={false}
              title="Aid Express"
              description="This project is based on poor people. They can get monthly payments from this application, and they can check their bank balance. This application uses three languages (English, Sinhala, and Tamil). Third-party users can donate through this application, and they can also get evidence. The user can create their account, and they need to submit some documents. If the user is eligible, they will get their username and password via SMS.
              React.js, Javascript, CSS, Node.js, Mongodb, Twilio, and Firebase were used for this project."
              ghLink="https://github.com/MICyber/Aidexpress.git"
              demoLink="https://aidexpress.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ConsoleHub}
              isBlog={false}
              title="Console Hub"
              description="This is an online game shopping website. The user can check a variety of games like car games,  shopping games,  puzzle games, and sports games. The user can purchase games here, and they will get the payment receipt. This webpage was created using HTML, CSS, and JavaScript."
              ghLink="https://github.com/mtthanaal/ConsoleHub.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WestminsterShoppingManager}
              isBlog={false}
              title="Westminster Shopping Manager"
              description="This project was created with Java and a GUI. This is a Java programme that has a manager menu. From there, the manager can add new products, delete products, print the list of products,save products to files,load products from files, and open the GUI."
              ghLink="https://github.com/mtthanaal/WestminsterShoppingManager.git"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TheUniversityRequiresAProgram}
              isBlog={false}
              title="The University Requires A Program"
              description="This is a Python program. The user can input their marks, and they can find the pass or fail result."
              ghLink="https://github.com/mtthanaal/TheUniversityRequiresAProgram-.git"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
