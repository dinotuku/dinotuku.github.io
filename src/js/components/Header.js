import React, { Component } from 'react';
import ClassNames from 'classnames';
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import logo from '../../img/logo.svg';

const customNavbarToggler = () => (
  <div>
    <span> </span>
    <span> </span>
    <span> </span>
  </div>
);

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <section className="hero">
        <Container>
          <Row>
            <Col>
              <Navbar className="border-bottom" color="white" light expand="md">
                <NavbarBrand href="/"><img src={logo} className="logo" alt="logo" /></NavbarBrand>
                <NavbarToggler className={
                  ClassNames({
                    'custom-collapsed': !this.state.isOpen
                  })
                } onClick={this.toggle} children={customNavbarToggler()} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem onClick={this.toggle}>
                      <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
                    </NavItem>
                    <NavItem onClick={this.toggle}>
                      <Link className="nav-link" to="/#projects" smooth>Projects</Link>
                    </NavItem>
                    <NavItem onClick={this.toggle}>
                      <Link className="nav-link" to="/#hobbies" smooth>Hobbies</Link>
                    </NavItem>
                    <NavItem onClick={this.toggle}>
                      <NavLink className="nav-link" to="/resume" activeClassName="active">Resume</NavLink>
                    </NavItem>
                    <NavItem onClick={this.toggle}>
                      <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Header;
