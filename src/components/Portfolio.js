import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import opticalPhoto from "../images/opticalPhoto.jpg";
import passGen from "../images/passGen.png";
import billsPC from "../images/billsPC.png";
import fittyTracker from "../images/fittyTracker.png";
import bigBudget from "../images/bigBudget.png";

const styles = {    
    lightG: {
        backgroundColor: "#DEDBD2"
    },
    
    pink: {
        backgroundColor: "#EDAFB8"
    },
    
    cham: {
        backgroundColor: "#F7E1D7"
    },
    
    green: {
        backgroundColor: "#B0C4B1"
    },
    
    deep: {
        backgroundColor: "#4A5759"
    },

    projCard: {
        width: '30%',
    },

    contPad: {
        paddingBottom: '81px'
    }
};

function Portfolio() {
    return (
        <Container style={styles.contPad}>
            <Card style={styles.lightG} className="my-5 rounded-3 text-center">
                <h3 className="m-4">Past Work</h3>
                <Card.Body className="card-body p-3">
                    <div id="Work">
                        <Row className="d-flex justify-content-evenly flex-wrap">
                            <Col sm={6} lg={4}>
                                <Card style={styles.cham} className="p-2 my-1">
                                    <Card.Img src={opticalPhoto} alt="Lenses in Production"/>
                                    <Card.Body>
                                        <Card.Title>Optical Order Tracker</Card.Title>
                                    </Card.Body>
                                    <div style={styles.lightG} className="card-footer d-flex justify-content-evenly">
                                        <a href="https://imagine-drive.herokuapp.com/" target="_blank" rel="noreferrer" className="btn">Deployed Site</a>
                                        <a href="https://github.com/gmunoz94/project2" target="_blank" rel="noreferrer" className="btn">Github Repo</a>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg={4}>
                                <Card style={styles.cham} className="p-2 my-1">
                                    <Card.Img src={passGen} alt="Lenses in Production"/>
                                    <Card.Body>
                                        <Card.Title>Password Generator</Card.Title>
                                    </Card.Body>
                                    <div style={styles.lightG} className="card-footer d-flex justify-content-evenly">
                                        <a href="https://gmunoz94.github.io/passGenerator/" target="_blank" rel="noreferrer" className="btn">Deployed Site</a>
                                        <a href="https://github.com/gmunoz94/passGenerator" target="_blank" rel="noreferrer" className="btn">Github Repo</a>                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg={4}>
                                <Card style={styles.cham} className="p-2 my-1">
                                    <Card.Img src={billsPC} alt="Lenses in Production"/>
                                    <Card.Body>
                                        <Card.Title>Bill's PC</Card.Title>
                                    </Card.Body>
                                    <div style={styles.lightG} className="card-footer d-flex justify-content-evenly">
                                        <a href="https://gmunoz94.github.io/pokeProj/" target="_blank" rel="noreferrer" className="btn">Deployed Site</a>
                                        <a href="https://github.com/gmunoz94/pokeProj" target="_blank" rel="noreferrer" className="btn">Github Repo</a>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg={4}>
                                <Card style={styles.cham} className="p-2 my-1">
                                    <Card.Img src="/images/billsPC.png" alt="Lenses in Production"/>
                                    <Card.Body>
                                        <Card.Title>Bill's PC</Card.Title>
                                    </Card.Body>
                                    <div style={styles.lightG} className="card-footer d-flex justify-content-evenly">
                                        <a href="https://gmunoz94.github.io/pokeProj/" target="_blank" rel="noreferrer" className="btn">Deployed Site</a>
                                        <a href="https://github.com/gmunoz94/pokeProj" target="_blank" rel="noreferrer" className="btn">Github Repo</a>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg={4}>
                                <Card style={styles.cham} className="p-2 my-1">
                                    <Card.Img src={fittyTracker} alt="Lenses in Production"/>
                                    <Card.Body>
                                        <Card.Title>Fitness Tracker</Card.Title>
                                    </Card.Body>
                                    <div style={styles.lightG} className="card-footer d-flex justify-content-evenly">
                                        <a href="https://fierce-eyrie-86934.herokuapp.com/" target="_blank" rel="noreferrer" className="btn">Deployed Site</a>
                                        <a href="https://github.com/gmunoz94/fittyTracker" target="_blank" rel="noreferrer" className="btn">Github Repo</a>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm={6} lg={4}>
                                <Card style={styles.cham} className="p-2 my-1">
                                    <Card.Img src={bigBudget} alt="Lenses in Production"/>
                                    <Card.Body>
                                        <Card.Title>Online Budget</Card.Title>
                                    </Card.Body>
                                    <div style={styles.lightG} className="card-footer d-flex justify-content-evenly">
                                        <a href="https://enigmatic-island-28277.herokuapp.com/" target="_blank" rel="noreferrer" className="btn">Deployed Site</a>
                                        <a href="https://github.com/gmunoz94/budgetMaster" target="_blank" rel="noreferrer" className="btn">Github Repo</a>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </Container>   
    );
}

export default Portfolio;