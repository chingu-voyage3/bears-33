import React from 'react';
import { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <Jumbotron fluid className="jumbotron d-flex align-items-center">
                        <Container fluid>
                            <h1 className="display-5 font-weight-bold">HUSKY RESCUE NZ CHARITABLE TRUST</h1>
                            <p className="lead">Rescue, Desex, Rehabilitate, Retrain and Rehome of Siberian Huskies in NZ</p>
                            <Button color="danger">Our Dogs</Button>{' '}
                        </Container>
                    </Jumbotron>
                </div>
            </header>
        );
    }
}

