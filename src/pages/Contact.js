import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function Contact() {

    const [ contactName, setcontactName] = useState('');
    const [ contactNumber, setcontactNumber] = useState('');
    const [ contactMessage, setcontactMessage ] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'contactName') {
            return setcontactName(value)
        } else if (name === 'contactNumber') {
            return setcontactNumber(value)
        } else if (name === 'contactMessage') {
            return setcontactMessage(value)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // sendSMS(`${contactName} ${contactNumber} ${contactMessage}`)
        alert('Message Received!')

        setcontactName('');
        setcontactMessage('');
        setcontactNumber('');
    }

    return(
        <div>
            <Container className="text-center">
                <h2 className="my-3">Contact Me</h2>
                <Form id="contact-info">
                    <Form.Group>
                        <Form.Label>Full Name: </Form.Label>
                        <Form.Control
                            type="text"
                            value={contactName}
                            name="contactName"
                            onChange={handleInputChange}
                            placeholder="John Doe"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number: </Form.Label>
                        <Form.Control
                            type="tel"
                            value={contactNumber}
                            name="contactNumber"
                            onChange={handleInputChange}
                            placeholder="###-###-####"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea"
                            type="text"
                            value={contactMessage}
                            name='contactMessage'
                            onChange={handleInputChange}
                            placeholder="Your Message Here"
                        />
                    </Form.Group>
                    <Button type="button" onClick={handleFormSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Contact;