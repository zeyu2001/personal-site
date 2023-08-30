import { Row, Col, Image, Container, ListGroup } from 'react-bootstrap';

const ImgCol = ({url, imgSrc, caption, size}) => {
    return (
        <Col xs="6" sm={size} md={size} className="justify-content-center d-flex flex-column">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="img-col-div">
                    <Image 
                        className="mx-auto d-block"
                        src={imgSrc} fluid width="80%"
                    />
                </div>
                <p align="center">{caption}</p>
            </a>
        </Col>
    )
}

const CveItem = ({url, cveId, name, cvss}) => {
    return (
        <>
        <a rel="noopener noreferrer" target="_blank" href={url}>
            <b>{cveId}</b>
        </a>: CVSS {cvss} — {name}
        </>
    )
}

const Security = () => {
    return (
        <>
        <Container>
            <div>
                <Image
                    className="mx-auto d-block"
                    src="/img/slytherin.gif" fluid 
                    width="100px"
                    max-width="100%"
                />
            </div>
            <h1 className='glow'>Security</h1>
            <p>
                Information security is one of the many fields I'm passionate about.
            </p>
            <p>
                I primarily specialise in web security. In my free time, I play cybersecurity Capture the Flag (CTF) competitions
                with <a href="https://ctftime.org/team/151372" rel="noreferrer" target="_blank">Social Engineering Experts</a>, 
                a Singaporean team I founded.
            </p>
            <Container className="my-5">
                <h2 align="center" className='glow'>Stuff I Hacked</h2>
                <div className="text-center">
                    View my <a href="https://hackerone.com/zeyu2001" target="_blank" rel="noopener noreferrer">HackerOne Profile</a>
                </div>
                <hr/>
                <Row className="justify-content-center">
                    <ImgCol size="2" url="https://www.government.nl/" imgSrc="./img/security/DutchGovt.png" caption="Government of the Netherlands"/>
                    <ImgCol size="2" url="https://www.mindef.gov.sg/" imgSrc="./img/security/MINDEF.png" caption="Ministry of Defence Singapore"/>
                    <ImgCol size="2" url="https://www.tech.gov.sg/" imgSrc="./img/security/govtech.png" caption="GovTech Singapore"/>
                    <ImgCol size="2" url="https://nodejs.org/en/" imgSrc="./img/security/Node.png" caption="Node.js"/>
                    <ImgCol size="2" url="https://hackerone.com/" imgSrc="./img/security/HackerOne.png" caption="HackerOne"/>
                    <ImgCol size="2" url="https://yahoo.com/" imgSrc="./img/security/yahoo.png" caption="Yahoo!"/>
                </Row>
                <Row className="justify-content-center">
                    <ImgCol size="2" url="https://upchieve.org/" imgSrc="./img/security/UPchieve.png" caption="UPchieve"/>
                    <ImgCol size="2" url="https://www.drugs.com/" imgSrc="./img/security/Drugs.png" caption="Drugs.com"/>
                    <ImgCol size="2" url="https://www.cedars-sinai.org/" imgSrc="./img/security/Cedars-Sinai.png" caption="Cedars Sinai"/>
                </Row>
                <Row className="justify-content-center my-5">
                    <p className="text-center">
                        This list is non-exhaustive and only includes public information. It does not include any private engagements.
                    </p>
                </Row>
            </Container>
            <Container>
                <Row className="my-5">
                    <h2 align="center" className='glow'>CVEs</h2>
                    <hr/>
                    <div className="my-5">
                        <ListGroup a="ul">
                            <li>
                                <CveItem 
                                    cveId="CVE-2023-3431"
                                    cvss="5.3 (Medium)"
                                    name="Local JSON File Read in PlantUML"
                                    url="https://nvd.nist.gov/vuln/detail/CVE-2023-3431"></CveItem>
                            </li>
                            <li>
                                <CveItem 
                                    cveId="CVE-2023-3432"
                                    cvss="7.2 (High)"
                                    name="URL Restriction Bypass to SSRF in PlantUML"
                                    url="https://nvd.nist.gov/vuln/detail/CVE-2023-3432"></CveItem>
                            </li>
                            <li>
                                <CveItem 
                                    cveId="CVE-2023-30334"
                                    cvss="6.1 (Medium)"
                                    name="Cross Site Scripting to Remote Code Execution in AsmBB"
                                    url="https://ctf.zeyu2001.com/2023/hxp-ctf/true_web_assembly"></CveItem>
                            </li>
                            <li>
                                <CveItem 
                                    cveId="CVE-2023-24720"
                                    cvss="9.8 (Critical)"
                                    name="Cross Site Scripting in ReadiumJS Cloud Reader"
                                    url="https://infosec.zeyu2001.com/2023/readiumjs-cloud-reader-everybody-gets-an-xss"></CveItem>
                            </li>
                            <li>
                                <CveItem 
                                    cveId="CVE-2022-25763, CVE-2022-28129"
                                    cvss="7.5 (High)"
                                    name="HTTP Request Smuggling in Apache Traffic Server"
                                    url="https://lists.apache.org/thread/rc64lwbdgrkv674koc3zl1sljr9vwg21"></CveItem>
                            </li>
                            <li>
                                <CveItem 
                                    cveId="CVE-2022-1705"
                                    cvss="6.5 (Medium)"
                                    name="HTTP Request Smuggling in Golang"
                                    url="https://access.redhat.com/security/cve/CVE-2022-1705"></CveItem>
                            </li>
                            <li>
                                <CveItem 
                                    cveId="CVE-2022-32213, CVE-2022-32214, CVE-2022-32215"
                                    cvss="6.5 (Medium)"
                                    name="HTTP Request Smuggling in Node.js"
                                    url="https://nodejs.org/en/blog/vulnerability/july-2022-security-releases/"></CveItem>
                            </li>
                            <li>
                                <CveItem 
                                    cveId="CVE-2022-24790"
                                    cvss="9.1 (Critical)"
                                    name="HTTP Request Smuggling in Puma"
                                    url="https://nvd.nist.gov/vuln/detail/CVE-2022-24790"></CveItem>
                            </li>
                            <li>
                                <CveItem 
                                    cveId="CVE-2022-24801"
                                    cvss="8.1 (High)"
                                    name="HTTP Request Smuggling in Twisted"
                                    url="https://nvd.nist.gov/vuln/detail/CVE-2022-24801"></CveItem>
                            </li>
                            <li>
                                <CveItem
                                    cveId="CVE-2022-24766"
                                    cvss="9.8 (Critical)"
                                    name="HTTP Request Smuggling in mitmproxy"
                                    url="https://nvd.nist.gov/vuln/detail/CVE-2022-24766"></CveItem>
                            </li>
                            <li>
                                <CveItem 
                                    cveId="CVE-2022-24761"
                                    cvss="7.5 (High)"
                                    name="HTTP Request Smuggling in Waitress"
                                    url="https://nvd.nist.gov/vuln/detail/CVE-2022-24761"></CveItem>
                            </li>
                            <li>
                                <CveItem 
                                    cveId="CVE-2022-1233"
                                    cvss="6.5 (Medium)"
                                    name="URL Confusion in URI.js"
                                    url="https://nvd.nist.gov/vuln/detail/CVE-2022-1233"></CveItem>
                            </li>
                        </ListGroup>
                    </div>
                    <div>
                        <p>
                            CVSS scores are provided by the <a href="https://nvd.nist.gov/" target="_blank" rel="noopener noreferrer">National Vulnerability Database</a>.
                            When undergoing analysis by the NVD, the CVSS score is not yet available.
                        </p>
                    </div>
                </Row>
                <Row>
                    <h2 align="center" className='glow'>Competitions</h2>
                    <hr/>
                    <Col xs={12} sm={6} md={6}>
                        <div className="my-5">
                            <div className="text-center">
                                <h3 className='glow'>International Competitions</h3>
                            </div>
                            <ListGroup a="ul">
                                <li>
                                    🇷🇴 HackTM CTF 2023 — 6th (Qualifiers), 🥈 (Finals)
                                </li>
                                <li>
                                    GovTech Government Bug Bounty Programme 2023 (Individual) — 🥇 Top Bug Bounty Hunter
                                </li>
                                <li>
                                    MINDEF Bug Bounty Programme 2022 (Individual) — 🥇 Top Bug Bounty Hunter
                                </li>
                                <li>
                                    🇹🇭 Cyber SEA Games 2022 — 🥈
                                </li>
                                <li>
                                    🇨🇭 EPFL LakeCTF 2022 — 7th (Qualifiers), 6th (Finals)
                                </li>
                                <li>
                                    🇹🇳 Securinets CTF 2022 — 4th (Qualifiers), 4th (Finals)
                                </li>
                                <li>
                                    🇸🇪 Midnight Sun CTF 2022 — 6th (Qualifiers), 7th (Finals)
                                </li>
                                <li>
                                    YaCTF 2022 (Individual) — 13th
                                </li>
                                <li>
                                    Asian Cyber Security Challenge 2021 (Individual) — 🥉 in SG
                                </li>
                                <li>
                                    Many more on the team's <a href="https://ctftime.org/team/151372" rel="noreferrer" target="_blank">CTFtime Profile</a>
                                </li>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <div className="my-5">
                            <div className="text-center">
                                <h3 className='glow'>Singapore Competitions</h3>
                            </div>
                            <ListGroup a="ul">
                                <li>
                                    DSTA BrainHack Cyber Defenders Discovery Camp 2023 — 🥉 (University Category)
                                </li>
                                <li>
                                    GovTech STACK The Flags 2022 — 🥉 (University Category)
                                </li>
                                <li>
                                    DSTA BrainHack Cyber Defenders Discovery Camp 2022 — 🥉 (University Category)
                                </li>
                                <li>
                                    NUS Grey Cat The Flag 2022 — 🥉 (Qualifiers), 4th (Finals)
                                </li>
                                <li>
                                    CTF.SG CTF 2022 — 🥉
                                </li>
                                <li>
                                    HTX Investigators' Challenge 2021 — 🥇, but it's a long story
                                </li>
                                <li>
                                    CSIT The InfoSecurity Challenge 2021 — Top 30
                                </li>
                                <li>
                                    DSTA BrainHack Cyber Defenders Discovery Camp 2021 — 🥉 (JC/IP Category)
                                </li>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <div className="my-5">
                            <div className="text-center">
                                <h3 className='glow'>Challenge Author</h3>
                            </div>
                            <ListGroup a="ul">
                                <li>
                                    SEETF 2022 - 2023
                                </li>
                                <li>
                                    CSIT The InfoSecurity Challenge 2022
                                </li>
                                <li>
                                    Cyber League Singapore Major 1
                                </li>
                                <li>
                                    STANDCON CTF 2021 - 2022
                                </li>
                                <li>
                                    Offensive Security Proving Grounds
                                </li>
                                <li>
                                    Hack the Box CTFs
                                </li>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <div className="my-5">
                            <div className="text-center">
                                <h3 className='glow'>CTF Organizer</h3>
                            </div>
                            <ListGroup a="ul">
                                <li>
                                    SEETF 2022 (2,000+ participants) — Planning, Infrastructure, Challenges
                                </li>
                                <li>
                                    SEETF 2023 — Coming soon!
                                </li>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <h2 align="center" className='glow'>Certifications</h2>
                <hr/>
                <Row className="justify-content-center">
                    <ImgCol size="3" url="https://www.credential.net/396f54b0-5182-4d28-bf3a-09df413eb817" imgSrc="./img/security/OSWE.png" 
                        caption="Offensive Security Web Expert"/>
                    <ImgCol size="3" url="https://www.credential.net/e23eb90d-5090-499e-88c1-a39ce2d5892d" imgSrc="./img/security/OSCP.png" 
                        caption="Offensive Security Certified Professional"/>
                    <ImgCol size="3" url="https://portswigger.net/web-security/e/c/8dccc9f64c35e1e1" imgSrc="./img/security/BSCP.png" 
                        caption="Burp Suite Certified Practitioner"/>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Security;