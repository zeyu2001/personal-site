import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';

class NotFound extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            window.location.href = "/";
        }, 5000);
    }

    render() {
        return (<>
            <div>
                <Image
                    className="mx-auto d-block"
                    src="./img/gryffindor.gif" fluid
                    width="100px"
                    max-width="100%"
                />
            </div>
            <Container className="text-center">
                <h1>404 - Not Found</h1>
                <p>Redirecting you to <Link to="/">Home</Link> in 5 seconds...</p>
            </Container>
        </>)
    }
}



export default NotFound;