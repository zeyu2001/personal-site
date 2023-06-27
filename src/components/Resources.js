import { Row, Col, Image, Container, ListGroup, Tab } from 'react-bootstrap';

const Resources = () => {

    return (
        <>
        <Container>
            <div>
                <Image
                    className="mx-auto d-block"
                    src="/img/hufflepuff.gif" fluid
                    width="100px"
                    max-width="100%"
                />
            </div>
            <Container>
                <h1 className='glow'>Resources</h1>
                <p>
                    A compilation of free resources that I've produced over the years.
                </p>
                <Container className="my-5">
                    <h2 align="center" className='glow'>Talks</h2>
                    <hr/>
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h3 className="glow">DEFCON CTF Qualifiers 2023 - Web Challenges</h3>
                            <div className="my-2">
                                <Row>
                                    <p class="lead">Singapore Cyber Olympians Programme</p>
                                    <p>
                                        A walkthrough of the web challenges from the DEFCON CTF Qualifiers 2023,
                                        for students part of the Singapore Cyber Olympians Programme.
                                    </p>
                                    <p>
                                        <a href="/pdf/talks/sgco/DEFCON23.pdf" target="_blank" rel="noopener noreferrer">Slides</a>
                                    </p>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="/img/talks/DEFCON23.png" fluid width="90%" rounded/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h3 className="glow">HTTP Request Smuggling in the Multiverse of Parsing Flaws</h3>
                            <div className="my-2">
                                <Row>
                                    <p class="lead">BSides Singapore</p>
                                    <p>
                                        HTTP request smuggling is a vulnerability which arises when web servers and proxies interpret the length of a single HTTP request differently. 
                                        While basic techniques have been known since 2005, renewed research interest in HTTP request smuggling in recent years have uncovered many new bugs in popular web proxies and servers. 
                                        Nowadays, novel HTTP request smuggling techniques rely on subtle deviations from the HTTP standard. 
                                        In this talk, I discuss some of his recent findings and novel techniques.
                                    </p>
                                    <p>
                                        <a href="https://infosec.zeyu2001.com/2022/http-request-smuggling-in-the-multiverse-of-parsing-flaws" target="_blank" rel="noopener noreferrer">Blog Post</a> |  <a href="/pdf/talks/bsides/HTTP-Request-Smuggling-BSidesSG2022.pdf" target="_blank" rel="noopener noreferrer">Slides</a>
                                    </p>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="/img/talks/BSidesSG.jpg" fluid width="90%" rounded/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h3 className="glow">Learn Hacking Through CTF Competitions</h3>
                            <div className="my-2">
                                <Row>
                                    <p class="lead">Division Zero Bug Bounty Quarter</p>
                                    <p>
                                        White hat hacking often requires a diverse set of skills and a vast repertoire of tricks that can aid one in exploitation. 
                                        A quick way to expand one's knowledge bank can be through Capture the Flag (CTF) competitions, but these can be intimidating to get started with and can often feel detached from real-world scenarios. 
                                        In this talk, I share what a year of playing CTF competitions and competing against top teams globally has taught me, how CTF challenges can realistically model real-world vulnerabilities, and how ethical hackers can create interesting and educational CTF challenges.
                                    </p>
                                    <a href="/pdf/talks/div0/Learn-Hacking-Through-CTF-Competitions.pdf" target="_blank" rel="noopener noreferrer">Slides</a>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="/img/talks/Div0.jpeg" fluid width="90%" rounded/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={6} className="justify-content-center d-flex flex-column my-5">
                            <h3 className="glow">River Valley High School CTF Club</h3>
                            <div className="my-2">
                                <Tab.Container defaultActiveKey="#link1">
                                <Row>
                                    <Col sm={6} className="my-2">
                                        <ListGroup>
                                            <ListGroup.Item action href="#link1" variant="dark">
                                                Intro to Ethical Hacking
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#link2" variant="dark">
                                                Cross-Site Scripting
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#link3" variant="dark">
                                                Server Side Attacks
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6} className="my-2">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="#link1">
                                            <p>
                                                A gentle introduction to ethical hacking and web technologies.
                                            </p>
                                            <a href="/pdf/talks/rvctf/01-Intro-To-Ethical-Hacking.pdf" target="_blank" rel="noopener noreferrer">Slides</a>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link2">
                                            <p>
                                                Why client side attacks matter and how to perform an XSS attack.
                                            </p>
                                            <a href="/pdf/talks/rvctf/02-Cross-Site-Scripting.pdf" target="_blank" rel="noopener noreferrer">Slides</a>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link3">
                                            <p>
                                                Server-side request forgery, SQL injection, JWT attacks, and HTTP request smuggling.
                                            </p>
                                            <a href="/pdf/talks/rvctf/03-Server-Side-Attacks.pdf" target="_blank" rel="noopener noreferrer">Slides</a>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                                </Tab.Container>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="justify-content-center align-items-center d-flex flex-column my-5">
                            <Image src="/img/talks/RVCTF.jpeg" fluid width="90%" rounded/>
                        </Col>
                    </Row>
                    <h2 align="center" className='glow'>Notes</h2>
                    <hr/>
                    <Row>
                        <Col className="justify-content-center d-flex flex-column my-5">
                            <h3 className="glow">A Levels</h3>
                            <div className="my-2">
                                <Tab.Container defaultActiveKey="#link1">
                                <Row>
                                    <Col sm={6} className="my-2">
                                        <ListGroup>
                                            <ListGroup.Item action href="#link1" variant="dark">
                                                H2 Computing
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#link2" variant="dark">
                                                H2 Economics
                                            </ListGroup.Item>
                                            <ListGroup.Item action href="#link3" variant="dark">
                                                H1 General Paper
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6} className="my-2">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="#link1">
                                            <p>
                                                Definitions and qualitative answers.
                                            </p>
                                            <a href="/pdf/notes/a-level/9597 Definitions and Qualitative Answers.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link2">
                                            <p>
                                                Case study question notes.
                                            </p>
                                            <a href="/pdf/notes/a-level/Econs CSQ Notes.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                            <hr/>
                                            <p>
                                                Essay content and evaluation points.
                                            </p>
                                            <a href="/pdf/notes/a-level/Econs Essay Points and EV.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link3">
                                            <p>
                                                Guide to approaching questions and content examples.
                                            </p>
                                            <a href="/pdf/notes/a-level/GP Notes.pdf" target="_blank" rel="noopener noreferrer">Download</a>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                                </Tab.Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
        </>
    )
}

export default Resources;