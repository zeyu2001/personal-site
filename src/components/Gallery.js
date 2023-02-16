import { Image, Container } from 'react-bootstrap';
import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

const midnightsun22 = require("./gallery/midnightsun22.json")
const mbbp22 = require("./gallery/mbbp22.json")
const lakectf22 = require("./gallery/lakectf22.json")
const cybersea22 = require("./gallery/cybersea22.json")
const swag = require("./gallery/swag.json")


const Album = (props) => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <div className="my-5">
                <h2 className='glow' align="center" >{props.title}</h2>
                <hr/>
                { props.location && props.year && <p align="center" >{props.location} | {props.year}</p> }
                { props.description && <p align="center" >{props.description}</p> }
                <PhotoAlbum 
                    photos={props.photos} 
                    layout="rows" 
                    targetRowHeight={150} 
                    onClick={({ index }) => setIndex(index)} 
                    componentsProps={{ imageProps: { "class": "rounded" }}}
                />
                <Lightbox
                    slides={props.photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
                />
            </div>
        </>
    )
}

const Gallery = () => {

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
            <h1 className='glow'>Gallery</h1>
            <div>
                <p>
                    As the adage goes, <a href="https://en.wikipedia.org/wiki/A_picture_is_worth_a_thousand_words" target="_blank" rel="noreferrer">
                        "a picture is worth a thousand words"
                    </a>. Clearly my pictures are worth more since they're larger than 2KB each.
                </p>
                <p>
                    In 2022 I promised myself to start taking more pictures and to document my life more. I'm not sure if I'll be able to keep that promise, but I'll try my best!
                </p>
            </div>
        </Container>
        <Container>
            <Album photos={swag} title="Swag 'n' Stuff" description="Click for more information!" />
            <Album photos={cybersea22} title="Cyber SEA Games" location="Bangkok, Thailand" year="2022" />
            <Album photos={lakectf22} title="LakeCTF Finals" location="Lausanne, Switzerland" year="2022" />
            <Album photos={mbbp22} title="MINDEF Bug Bounty Programme Award Ceremony" location="Singapore" year="2022" />
            <Album photos={midnightsun22} title="Midnight Sun CTF Finals" location="Stockholm, Sweden" year="2022" />
        </Container>
    </Container>
    </>
    )
}

export default Gallery;