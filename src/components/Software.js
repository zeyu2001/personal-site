import { Row, Col, Image, Container, Badge, ListGroup } from 'react-bootstrap';
import { 
    SiFlask, SiReact, SiJavascript, SiPython, SiBootstrap, SiDjango, SiExpress, SiNodedotjs, SiDocker, SiVagrant,
    SiJava, SiSpringboot
} from 'react-icons/si';
import { FaChrome } from 'react-icons/fa';
import React from 'react';

const FlaskBadge = () => {
    return (
        <Badge bg="success"><SiFlask/> Flask</Badge>
    )
};

const ChromeBadge = () => {
    return (
        <Badge bg="secondary"><FaChrome/> Chrome Extension</Badge>
    )
};

const ReactBadge = () => {
    return (
        <Badge bg="primary"><SiReact/> React</Badge>
    )
}

const BootstrapBadge = () => {
    return (
        <Badge bg="danger"><SiBootstrap/> Bootstrap</Badge>
    )
}

const JavaScriptBadge = () => {
    return (
        <Badge bg="warning" text="dark"><SiJavascript/> JavaScript</Badge>
    )
}

const ExpressBadge = () => {
    return (
        <Badge bg="white" text="dark"><SiExpress/> Express</Badge>
    )
}

const Software = () => {
    return (
        <>
        <Container>
            <div>
                <Image
                    className="mx-auto d-block"
                    src="/img/ravenclaw.gif" fluid 
                    width="100px"
                    max-width="100%"
                />
            </div>
            <h1 className='glow'>Software</h1>
            <p>
                Of course, I can't call myself a tech guy without some software projects.
            </p>
            <p>
                I enjoy building scalable, secure, and performant software systems.
            </p>
            <Container className="my-5">
                <h2 align="center" className='glow'>Stuff I Made</h2>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://github.com/sebasyii/zeno" rel="noreferrer" target="_blank">Zeno</a></h2>
                        <p>
                            A collection of modules to secure Express applications.
                        </p>
                        <p>
                            Finalist, GovTech STACK The Codes Hackathon.
                        </p>
                        <div>
                            <JavaScriptBadge/> <ExpressBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/software/Zeno.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="https://www.charlotteweb.io/" rel="noreferrer" target="_blank">Charlotte</a></h2>
                        <p>
                            Charlotte aims to make the web more accessible by providing a suite of accessibility tools, all in one handy browser extension.
                        </p>
                        <p>
                            Most Impactful Award, Tech for Good Festival.
                        </p>
                        <div>
                            <FlaskBadge/> <ReactBadge/> <ChromeBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/software/Charlotte.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                    <h2><a href="/" rel="noreferrer" target="_blank">Personal Website</a></h2>
                        <p>
                            Wait... that's this site!
                        </p>
                        <div>
                            <ReactBadge/> <BootstrapBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/software/PersonalSite.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                        <h2><a href="https://zeyu2001.github.io/chess-ai/" rel="noreferrer" target="_blank">Chess AI</a></h2>
                        <p>
                            Simple Chess AI in JavaScript, using the minimax algorithm, alpha-beta pruning, and piece square tables.
                        </p>
                        <div>
                            <JavaScriptBadge/> <BootstrapBadge/>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                        <Image src="./img/software/Chess.png" fluid width="90%" rounded/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={6} className="my-5">
                        <h2 align="center" className='glow'>Technologies I Use</h2>
                        <hr/>
                        <div className="my-5">
                            <ListGroup a="ul">
                                <li>
                                    <SiPython/> Python, <SiDjango/> Django, <SiFlask/> Flask
                                </li>
                                <li>
                                    <SiNodedotjs/> Node.js, <SiExpress/> Express
                                </li>
                                <li>
                                    <SiReact/> React, <SiBootstrap/> Bootstrap
                                </li>
                                <li>
                                    <SiJava/> Java, <SiSpringboot/> Spring Boot
                                </li>
                                <li>
                                    <SiDocker/> Docker, <SiVagrant/> Vagrant
                                </li>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="my-5">
                        <h2 align="center" className='glow'>Competitions</h2>
                        <hr/>
                        <div className="my-5">
                            <ListGroup a="ul">
                                <li>
                                    Tech For Good Festival 2021 - Most Impactful Award
                                </li>
                                <li>
                                    BrainHack Today I Learned AI Camp 2021 - 4th Place, Newcomer Award (University Category)
                                </li>
                                <li>
                                    National Olympiad for Informatics 2019 - Bronze Award
                                </li>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Software;