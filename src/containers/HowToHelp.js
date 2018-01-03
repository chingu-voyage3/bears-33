import React from 'react';
import { Component } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {connect} from "react-redux";

class HowToHelp extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <section >
                <Container>
                    <h2 className="text-center mb-5">HOW TO HELP</h2>
                    <div>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    id="weNeedYourHelp"
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    We Need Your Help
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    id="charityStatus"
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    Charity Status
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    id="contributions"
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                >
                                    Contributions
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12" className="text-justify">
                                        {this.props.data.weNeedYourHelp.map(function(text, index){
                                            return <p className={classnames({ "mt-4": index === 0 })}>{text}</p>
                                        })}
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Col sm="12" className="text-justify">
                                    <p className="mt-4">
                                        <b>DIA Registration - {this.props.data.charityStatus.diaRegistration}</b>
                                    </p>
                                    <p>
                                        <b>GST Registration - {this.props.data.charityStatus.gstRegistration}</b>
                                    </p>
                                    {this.props.data.charityStatus.content.map(function(text){
                                        return <p>{text}</p>
                                    })}
                                </Col>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12" className="text-justify">
                                        <h4 className="mt-4">So how can you help?</h4>
                                        <p>{this.props.data.contributions.intro}</p>
                                        <p>
                                            <b>Financial Contributions</b>
                                            <ul className="no-bullet">
                                                <li>Direct Deposit:</li>
                                                {this.props.data.contributions.financialDetails.map(function(text){
                                                    return <li>{text}</li>
                                                })}
                                            </ul>
                                        </p>

                                        <h4>Corporate Sponsorship contracts</h4>
                                        <p>{this.props.data.contributions.corporateSponsorship}</p>

                                        <h4>Needed: Can you help with these by donating money toward them, or
                                            donating the item itself or discounting a needed service?
                                        </h4>
                                        <ul>
                                            {this.props.data.contributions.needed.map(function(text){
                                                return <li>{text}</li>
                                            })}
                                        </ul>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                </Container>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.howToHelpSection
    };
}

export default connect(mapStateToProps)(HowToHelp);