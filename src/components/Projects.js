import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Youtube Clone",
      description: "ReactJS/Tailwind CSS/Rapid API",
      imgUrl: projImg1,
      url: "https://nk7-youtube-clone.netlify.app/",
      sourceCodeUrl: "https://github.com/NandiniK0401/my_youtube_clone"
    },
    {
      title: "Chattifyy AI",
      description: "ReactJS/ExpressJS",
      imgUrl: projImg2,
      url: "https://chattifyy.netlify.app/",
      sourceCodeUrl: "https://github.com/Vsaluja/AI-Chatbot"
    },
    {
      title: "Pomodoro App",
      description: "NextJS/TypeScript/TailwindCSS/Jest/Stripe",
      imgUrl: projImg7,
      url: "https://pomodorogod.onrender.com/",
      sourceCodeUrl: "https://github.com/NSCC-ITC-Winter2024-WEBD5010and5015-MCa/webd5015-project-pomodoro-app"
    },
    {
      title: "Music Player App",
      description: "HTML/CSS/JavaScript/MongoDB",
      imgUrl: projImg3,
      url: "https://myy-music-player.netlify.app/",
      sourceCodeUrl: "https://github.com/NandiniK0401/music_player"
    },
    {
      title: "Weather App",
      description: "Node.js/HTML/CSS/JavaScript/API Call",
      imgUrl: projImg4,
      url: "https://weather-app-hgn2.onrender.com",
      sourceCodeUrl: "https://github.com/NandiniK0401/weather_app"
    },
    {
      title: "To Do List",
      description: "DOM Manipulation/Vanilla JS",
      imgUrl: projImg5,
      url: "https://todo-list24.netlify.app/",
      sourceCodeUrl: "https://github.com/NandiniK0401/to-do-list"
    },
    {
      title: "Acme Childcare",
      description: "HTML Canvas/Tailwind CSS/JavaScript",
      imgUrl: projImg6,
      url: "https://acmechildcare.netlify.app/",
      sourceCodeUrl: "https://github.com/NandiniK0401/childcare"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                {/* <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Work Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Education />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <WorkExperience />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}