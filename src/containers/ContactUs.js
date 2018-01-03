import React from 'react';
import { Component } from 'react';
import { Container, Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faPaypal from '@fortawesome/fontawesome-free-brands/faPaypal';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';
import faHandshake from '@fortawesome/fontawesome-free-solid/faHandshake';
import {connect} from "react-redux";

class ContactUs extends Component {
    render() {
        return (
            <section id="contact">
                <Container fluid>
                    <h2 className="text-center p-5">CONTACT</h2>
                    <Container>
                    <div className="row">
                        <div>
                            <h3 className="mb-3">Informations</h3>
                            <p>
                                Phone Number: {this.props.data.phoneNumber}
                                <br/>E-mail: {this.props.data.email}
                            </p>
                            <div >
                                <Button color="primary mr-3 mb-2" href={this.props.data.paypalUrl}>
                                    <FontAwesomeIcon className="mr-2 " icon={ faPaypal } size={'sm'} />
                                    DONATE NOW
                                </Button>{' '}
                                <Button color="warning mr-3 mb-2" href={this.props.data.giveALittleUrl}><FontAwesomeIcon className="mr-2 " icon={ faHandshake } size={'sm'} />DONATE By GiveALittle</Button>{' '}
                                <Button color="info mb-2" href={this.props.data.entertainmentBookUrl}><FontAwesomeIcon className="mr-2 " icon={ faShoppingCart } size={'sm'} />BUY NOW The Entertainment Book </Button>{' '}
                            </div>
                            <div>
                                <h3 className="mb-3 mt-3">Follow Us</h3>
                                <a className="mr-3 social-icon" href={this.props.data.facebookUrl}><FontAwesomeIcon icon={ faFacebook }  size={'3x'} /></a>
                                <a className="social-icon" href={this.props.data.instagramUrl}><FontAwesomeIcon icon={ faInstagram } size={'3x'} /></a>
                            </div>
                        </div>
                    </div>
                    </Container>
                </Container>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.contactUsSection
    };
}

export default connect(mapStateToProps)(ContactUs);