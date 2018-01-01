import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button } from 'reactstrap';
import YouTube from 'react-youtube';


class WhatYouNeedToKnow extends Component {
    render() {
        return (
            <section>
                <Container>
                    <h2 className="text-center mb-5">WHAT YOU NEED TO KNOW</h2>
                    <div class="row align-items-center">
                        <div className="col-md-4">
                            <p>{ this.props.data.content }</p>
                            <Button color="danger">Learn More</Button>{' '}
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