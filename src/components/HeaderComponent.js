import React from 'react';
import { Collapse, Navbar,NavbarText, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" className='Navbar_Color' fixed="top">
          <NavbarBrand>
             <div className='container'>
               <div className='row'>
                 <div className='col-12 col-md-4 ml-4'>
                   <img src="images/download.png" alt="lnt_logo" style={{width: '100%' }} className="ml-3"/> 
                 </div>
               </div>
             </div>
          </NavbarBrand>
          <NavbarBrand href="/" className='d-flex justify-content-center'>
            Ristorante Con Fusion
          </NavbarBrand>
          <NavbarBrand >
            <div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <LanguageIcon />
              <NotificationsNoneIcon /> 
              <PermIdentityIcon /><span>Silpa</span>
              <KeyboardArrowDownIcon />
            </div>
          </NavbarBrand>
          {/* <NavbarToggler onClick={this.toggleNavbar} className="ml-auto" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse> */}
        </Navbar>
      </div>
    );
  }
}