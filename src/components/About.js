import { Container, Image } from 'react-bootstrap';
import Typed from 'react-typed';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <>
      <Container>
        <div>
          <Image
              className="mx-auto d-block"
              src="./img/gryffindor.gif" fluid 
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
        <hr/>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--school"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="Future (2023 - 2026)"
            dateClassName='glow'
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<i className="fas fa-graduation-cap center-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">B.A. Computer Science</h3>
            <p className="vertical-timeline-element-subtitle">University of Cambridge</p>
            <hr />
            <p>
              Incoming undergraduate.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--school"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="2021"
            dateClassName='glow'
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<i className="fas fa-graduation-cap center-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Burp Suite Certified Practitioner</h3>
            <p className="vertical-timeline-element-subtitle">PortSwigger</p>
            <hr />
            <p>
              Web security testing certification.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--school"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="2021"
            dateClassName='glow'
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<i className="fas fa-graduation-cap center-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Offensive Security Certified Professional</h3>
            <p className="vertical-timeline-element-subtitle">Offensive Security</p>
            <hr />
            <p>
              Penetration testing certification.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2021 - present"
            dateClassName='glow'
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="fas fa-briefcase center-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Cyber Security Specialist</h3>
            <p className="vertical-timeline-element-subtitle">Ministry of Defence, Singapore</p>
            <hr />
            <p>
              Threat intelligence, tooling, technical analysis.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--school"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="2020"
            dateClassName='glow'
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<i className="fas fa-graduation-cap center-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Cyber Defence School</h3>
            <p className="vertical-timeline-element-subtitle">Singapore Armed Forces</p>
            <hr />
            <p>
              Cyber Forensics, Incident Response, Malware Analysis, Penetration Testing.
            </p>
            <p>
              Distinguished Honour Graduate and Best in Knowledge.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2018"
            dateClassName='glow'
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<i className="fas fa-briefcase center-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">Research Intern</h3>
            <p className="vertical-timeline-element-subtitle">A*STAR, Singapore</p>
            <hr />
            <p>
              Computational Physics.
            </p>
            <p>
              Best Poster Award @ SSEF 2019.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--school"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="2014 - 2019"
            dateClassName='glow'
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<i className="fas fa-graduation-cap center-icon"></i>}
          >
            <h3 className="vertical-timeline-element-title">A Level</h3>
            <p className="vertical-timeline-element-subtitle">River Valley High School</p>
            <hr />
            <p>
              Distinctions in H2 Computing, Mathematics, Physics, Economics, and H3 Physics.
            </p>
            <p>
              Senior Infocomm Club, Science Leaders Academy, Eco-sustainability Club.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </>
  );
}

export default About