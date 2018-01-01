import React from 'react';
import { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import logo from './logo.jpg';

export default class MainNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar light expand="lg" color="light">
                    <NavbarBrand href="/">
                        <img src={logo} alt="Husky Rescue logo" className="logo" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="#">Home</NavLink></NavItem>
                            <NavItem><NavLink href="#">About Us</NavLink></NavItem>
                            <UncontrolledDropdown nav>
                                <DropdownToggle nav caret>Adoption</DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>What you need to know</DropdownItem>
                                    <DropdownItem>Adopt Me</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav>
                                <DropdownToggle nav caret>How To Help</DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>We need your help</DropdownItem>
                                    <DropdownItem>Charity Status</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Contributions</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem><NavLink href="#">Our Events</NavLink></NavItem>
                            <NavItem><NavLink href="#">Surrender a Husky</NavLink></NavItem>
                            <NavItem><NavLink href="#">Contact</NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}