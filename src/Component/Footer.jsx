import React from 'react';
import { Container,  Navbar} from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar className="border-top border-dark mt-4">
            <Container className="justify-content-center">
                <Navbar.Text>
                    Copyright © 2025 Kartify.com. All rights reserved
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}
export default Footer;