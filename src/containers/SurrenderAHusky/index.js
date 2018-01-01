import React from 'react';
import { Component } from 'react';
import { Container, Button } from 'reactstrap';
import Husky from './husky.jpg'
import {connect} from "react-redux";

class SurrenderAHusky extends Component {
    render() {
        return (
            <section>
                <Container>
                    <h2 className="text-center mb-5">SURRENDER A HUSKY</h2>
                    <div className="row align-items-center ">
                        <div className="col-md-8">
                            <img src={Husky} alt="Husky" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-md-4">
                            <p  className="text-center">{this.props.data.content}</p>
                            <div className="d-flex flex-wrap justify-content-center">
                                <Button color="danger" href={this.props.data.contactUsLink} >Contact Us</Button>{' '}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.surrenderAHuskySection
    };
}

export default connect(mapStateToProps)(SurrenderAHusky);