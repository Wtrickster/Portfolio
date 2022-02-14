// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row, Container, Img } from "../Grid";

// Import screenshots
import BirthdayBot from "../../assets/BirthdayBot.png";
import DailyPlanner from "../../assets/DailyPlanner.png";
import EmployeeDirectory from "../../assets/EmployeeDirectory.png";
import NoteTaker from "../../assets/NoteTaker.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  EffectCube,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCube,Pagination]);

function Projects() {
  return (
    <>
    <Swiper direction={'vertical'} effect={'cube'} loop={true} grabCursor={true} cubeEffect={{
      "shadow": false,
      "slideShadows": true,
      "shadowOffset": 20,
      "shadowScale": 1
    }} pagination={true} className="mySwiper2 swiper-v">
      <SwiperSlide>
        <Container settings="color">
          <Row>
            <Col settings= "">
              <Img source={BirthdayBot} />
            </Col>
            <Col>
              <Row>
                <h3>BirthdayBot</h3>
              </Row> 
              <Row settings="text">
                <p>First group project harnessing the power of APIs to give you a personalized list of celebrity birthdays.</p>
              </Row>
              <Row>
                <li><a href="https://wtrickser.github.io/birthdayBot/" target="_blank" rel="noreferrer">Deployed Page</a></li>
              </Row>
              <Row>
                <li><a href="https://github.com/Wtrickser/birthdayBot" target="_blank" rel="noreferrer">Github</a></li>
              </Row>
            </Col>
          </Row>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container settings="color">
          <Row>
            <Col settings= "text d-flex align-items-center justify-content-center">
              <Img source={NoteTaker} />
            </Col>
            <Col>
              <Row>
                <h3>NoteTaker</h3>
              </Row> 
              <Row settings="text">
                <p>A simple note-taking app that allows the user to create and save notes using an Express.js back end to save and retrieve note data from a JSON file. The front-end of this site was provided for the sake of building a back end connection and deploying the app to Heroku.</p>
              </Row>
              <Row>
                <li><a href="https://mrpen-notetaker.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Page</a></li>
              </Row>
              <Row>
                <li><a href="https://github.com/Wtrickser/NoteTaker" target="_blank" rel="noreferrer">Github</a></li>
              </Row>
            </Col>
          </Row>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container settings="color">
          <Row>
            <Col settings= "text d-flex align-items-center justify-content-center">
              <Img source={DailyPlanner} />
            </Col>
            <Col>
              <Row>
                <h3>DailyPlanner</h3>
              </Row> 
              <Row settings="text">
                <p>A task list with a dynamically generated display with the ability to save list items in local storage.</p>
              </Row>
              <Row>
                <li><a href="https://wtrickser.github.io/dailyPlanner/" target="_blank" rel="noreferrer">Deployed Page</a></li>
              </Row>
              <Row>
                <li><a href="https://github.com/Wtrickser/dailyPlanner" target="_blank" rel="noreferrer">Github</a></li>
              </Row>
            </Col>
          </Row>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container settings="color">
          <Row>
            <Col settings= "text d-flex align-items-center justify-content-center">
              <Img source={EmployeeDirectory} />
            </Col>
            <Col settings="text">
              <Row>
                <h3>EmployeeDirectory</h3>
              </Row> 
              <Row >
                <p>The React Employee Directory app allows for business professionals to access non-sensitive employee data and filter through them. Employers can search for specific employees from the search field at the top of the app as well as sort alphabetically.</p>
              </Row>
              <Row>
                <li><a href="https://mrpen-employeedirectory.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Page</a></li>
              </Row>
              <Row>
                <li><a href="https://github.com/Wtrickser/employeeDirectory" target="_blank" rel="noreferrer">Github</a></li>
              </Row>
            </Col>
          </Row>
        </Container>
      </SwiperSlide>
    </Swiper>
    </>
  )
}

export default Projects;