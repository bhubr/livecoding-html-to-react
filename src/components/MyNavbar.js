import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class MyNavbar extends React.Component {
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
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">World</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">U.S.</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Technology</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Design</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Culture</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Business</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Politics</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Health</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Style</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="#">Travel</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default MyNavbar;