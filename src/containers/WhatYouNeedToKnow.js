import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import YouTube from 'react-youtube';


class WhatYouNeedToKnow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }
    render() {
        return (
            <section>
                <Container>
                    <h2 className="text-center mb-5">WHAT YOU NEED TO KNOW</h2>
                    <div class="row align-items-center">
                        <div className="col-md-4">
                            <p>{ this.props.data.content }</p>
                            <Button color="danger" onClick={this.toggle}>Read More</Button>
                        </div>
                        <div className="col-md-8">
                            <div className="embed-responsive embed-responsive-16by9">
                                <YouTube className="embed-responsive-item"
                                    videoId="L0rWMOkD5HY"
                                    onReady={this._onReady}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
                {/*Modal*/}
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Bad Points</ModalHeader>
                        <ModalBody>
                            <p>Really important to know and be prepared for!</p>
                            <ol>
                                {this.props.data.badPoints.map(function(text){
                                    return <li>{text}</li>
                                })}
                            </ol>
                            <br />
                            <Button color="danger" onClick={this.toggleNested}>Go to Good Points</Button>
                            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalHeader>Good Points</ModalHeader>
                                <ModalBody>
                                    <p>What you probably already know</p>
                                    <ol>
                                        {this.props.data.goodPoints.map(function(text){
                                            return <li>{text}</li>
                                        })}
                                    </ol>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onClick={this.toggleNested}>Did you skip the Bad points? GO BACK!</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
                                </ModalFooter>
                            </Modal>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Done</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </section>
        );
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

function mapStateToProps(state) {
    return {
        data: state.whatYouNeedToKnowSection
    };
}

export default connect(mapStateToProps)(WhatYouNeedToKnow);