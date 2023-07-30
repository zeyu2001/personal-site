import { Container, Image, ListGroup } from 'react-bootstrap';
import Typed from 'react-typed';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const EducationElement = ({ title, subtitle, date, description }) => (
    <VerticalTimelineElement
      className="vertical-timeline-element--school"
      contentStyle={{ background: 'rgb(0, 51, 51)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(0, 51, 51)' }}
      date={date}
      dateClassName='glow'
      iconStyle={{ background: 'rgb(0, 51, 51)', color: '#fff' }}
      icon={<i className="fas fa-graduation-cap center-icon"></i>}
    >
      <h3 className="vertical-timeline-element-title glow">{title}</h3>
      <p className="vertical-timeline-element-subtitle">{subtitle}</p>
      <hr />
      {
          description.map((item) => (
              <p>{item}</p>
          ))
      }
  </VerticalTimelineElement>
);

const CertificationElement = ({ title, subtitle, date, description }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--school"
    contentStyle={{ background: 'rgb(102, 0, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(102, 0, 0)' }}
    date={date}
    dateClassName='glow'
    iconStyle={{ background: 'rgb(102, 0, 0)', color: '#fff' }}
    icon={<i className="fas fa-scroll center-icon"></i>}
  >
    <h3 className="vertical-timeline-element-title glow">{title}</h3>
    <p className="vertical-timeline-element-subtitle">{subtitle}</p>
    <hr />
    {
        description.map((item) => (
            <p>{item}</p>
        ))
    }
  </VerticalTimelineElement>
);

const WorkElement = ({ title, subtitle, date, description }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--school"
    contentStyle={{ background: 'rgb(51, 51, 102)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(51, 51, 102)' }}
    date={date}
    dateClassName='glow'
    iconStyle={{ background: 'rgb(51, 51, 102)', color: '#fff' }}
    icon={<i className="fas fa-briefcase center-icon"></i>}
  >
    <h3 className="vertical-timeline-element-title glow">{title}</h3>
    <p className="vertical-timeline-element-subtitle">{subtitle}</p>
    <hr />
    {
        description.map((item) => (
            <p>{item}</p>
        ))
    }
  </VerticalTimelineElement>
);

const About = () => {
  return (
    <>
    <Container>
      <Container>
        <div>
          <Image
              className="mx-auto d-block"
              src="/img/gryffindor.gif" fluid
              width="100px"
              max-width="100%"
          />
        </div>
        <h1 className='glow'>About</h1>
        <div>
          <p>Hi, I'm Zeyu (Chinese) or Zayne (English).</p>
          <p>I am a <Typed
            strings={[
              'Computer Science student.',
              'security guy.',
              'software developer.',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop />
          </p>
        </div>
      </Container>
      <Container className="my-5">
          <h2 align="center" className='glow'>Media</h2>
          <hr/>
          <div className="my-5">
            <p>Sometimes I do stuff and people write about it.</p>
            <ListGroup a="ul">
              <li>
                <a href="https://www.8world.com/stories/hello-singapore/click-it-young-talents-in-cyber-security-2009746" target="_blank" rel="noreferrer">
                  [Chinese] Hello Singapore: Young Talents in Cyber Security | MediaCorp Channel 8
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/AJCCBC/posts/pfbid02EUcRfHjRsXhgjo7M65HtU2ws2duhz5DtVs4dc1hMajfNfVTDEM4aZcPdKbAiPcdl" target="_blank" rel="noreferrer">
                  Cyber SEA Games 2022 | ASEAN-Japan Cybersecurity Capacity Building Centre
                </a>
              </li>
              <li>
                <a href="https://www.csit.gov.sg/events/tisc/past-editions-of-tisc/tisc-2022-community-challenge-creators" target="_blank" rel="noreferrer">
                  TISC 2022 community challenge creators | Centre for Strategic Infocomm Technologies
                </a>
              </li>
              <li>
                <a href="https://portswigger.net/daily-swig/node-js-fixes-multiple-bugs-that-could-lead-to-rce-http-request-smuggling" target="_blank" rel="noreferrer">
                  Node.js fixes multiple bugs that could lead to RCE, HTTP request smuggling | The Daily Swig
                </a>
              </li>
              <li>
                <a href="https://portswigger.net/daily-swig/http-request-smuggling-bug-patched-in-mitmproxy" target="_blank" rel="noreferrer">
                  HTTP request smuggling bug patched in mitmproxy | The Daily Swig
                </a>
              </li>
            </ListGroup>
          </div>
      </Container>
      <Container className="my-5">
        <h2 align="center" className='glow'>Timeline</h2>
        <hr/>
        <VerticalTimeline>
          <EducationElement
            title="B.A. Computer Science"
            subtitle="University of Cambridge"
            date="Future (2023 - 2026)"
            description={["Incoming undergraduate."]}
          />
          <WorkElement
            title="Security Engineer"
            subtitle="ByteDance"
            date="2023"
            description={["Source code review, security tooling, security research."]}
          />
          <CertificationElement
            title="Offensive Security Web Expert"
            subtitle="Offensive Security"
            date="2022"
            description={["Web security testing certification."]}
          />
          <CertificationElement
            title="Burp Suite Certified Practitioner"
            subtitle="PortSwigger"
            date="2021"
            description={["Web security testing certification."]}
          />
          <CertificationElement
            title="Offensive Security Certified Professional"
            subtitle="Offensive Security"
            date="2021"
            description={["Penetration testing certification."]}
          />
          <WorkElement
            title="Cyber Security Specialist"
            subtitle="Ministry of Defence, Singapore"
            date="2021 - 2022"
            description={["Threat intelligence, tooling, technical analysis."]}
          />
          <EducationElement
            title="Cyber Defence School"
            subtitle="Singapore Armed Forces"
            date="2020"
            description={[
              "Cyber Forensics, Incident Response, Malware Analysis, Penetration Testing.",
              "Distinguished Honour Graduate and Best in Knowledge."
            ]}
          />
          <WorkElement
            title="Research Intern"
            subtitle="A*STAR, Singapore"
            date="2018"
            description={[
              "Computational Physics.",
              "Best Poster Award @ SSEF 2019."
            ]}
          />
          <EducationElement
            title="A Level"
            subtitle="River Valley High School"
            date="2014 - 2019"
            description={[
              "Distinctions in H2 Computing, Mathematics, Physics, Economics, and H3 Physics.",
              "Senior Infocomm Club, Science Leaders Academy, Eco-sustainability Club."
            ]}
          />
        </VerticalTimeline>
      </Container>
    </Container>
    </>
  );
}

export default About