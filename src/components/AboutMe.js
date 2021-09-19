import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const styles = {
    gerardoImg: {
        height: 'auto',
        width: '100%',
        maxHeight: '450px',
        maxWidth: '337.5px'
    },
    contPad: {
        paddingBottom: '81px'
    }
}

function AboutMe() {

    return(
        <div>
            <Container className="my-3" style={styles.contPad}>
                <Row className="text-center my-3">
                    <h2>About Me</h2>
                </Row>
                <Row className='my-3 justify-content-evenly'>
                    <Col md={12} lg={3} className="justify-content-center">
                        <img src='/images/gerardo.jpeg' style={styles.gerardoImg} alt='headshot'></img>
                    </Col>
                    <Col md={12} lg={8}>
                        <h3 className="py-3">Gerardo</h3>
                        <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Pulvinar proin gravida hendrerit lectus a. Dui ut ornare lectus sit amet est placerat in. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit.</p>
                        <p className="fs-5">Sollicitudin aliquam ultrices sagittis orci a scelerisque. Lacus laoreet non curabitur gravida arcu. Bibendum est ultricies integer quis auctor elit. Interdum velit laoreet id donec ultrices tincidunt. Vitae elementum curabitur vitae nunc sed velit. Tristique magna sit amet purus gravida. Sed vulputate mi sit amet mauris. Nulla malesuada pellentesque elit eget. Felis eget velit aliquet sagittis id consectetur purus ut. Fusce id velit ut tortor pretium viverra suspendisse. Velit euismod in pellentesque massa placerat. Mauris a diam maecenas sed enim ut sem. Fames ac turpis egestas sed tempus urna. Enim sit amet venenatis urna cursus eget. Enim ut sem viverra aliquet eget sit amet tellus. Vel fringilla est ullamcorper eget nulla facilisi etiam.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;