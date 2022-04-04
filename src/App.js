import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import Proba from "./sajatosztalyok/Proba";
import TipusTorles from "./sajatosztalyok/TipusTorles";
import Fooldal from "./sajatosztalyok/Fooldal";
import TermekTorles from "./sajatosztalyok/TermekTorles";
import TipusFelvitel from "./sajatosztalyok/TipusFelvitel";
import EtelTipusFelvitel from "./sajatosztalyok/EtelTipusFelvitel";
import TermekFelvitel from "./sajatosztalyok/TermekFelvitel";
import ReceptFelvitel from "./sajatosztalyok/ReceptFelvitel";
import ReceptKategoriaFelvitel from "./sajatosztalyok/ReceptKategoriaFelvitel";
import ReceptTorles from "./sajatosztalyok/ReceptTorles";

import ReceptLekerdez from "./sajatosztalyok/ReceptLekerdez";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/Fooldal">
        
        Termékeink
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="ReceptLekerdez">Receptek</Nav.Link>
          

          {showAdminBoard && (   

          <NavDropdown title="Admin menü" id="collasible-nav-dropdown">

            <NavDropdown.Item href="TipusFelvitel">Tipus felvitele</NavDropdown.Item>
            <NavDropdown.Item href="EtelTipusFelvitel">Étel tipus felvitele</NavDropdown.Item>
            <NavDropdown.Item href="TermekFelvitel">Termék felvitele</NavDropdown.Item>
            <NavDropdown.Item href="ReceptFelvitel">Recept felvitele</NavDropdown.Item>
            <NavDropdown.Item href="ReceptKategoriaFelvitel">Recept kategória felvitele</NavDropdown.Item>

            <NavDropdown.Item href="ReceptLekerdez">Receptek</NavDropdown.Item>
            
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">

            <NavDropdown.Item href="/TipusTorles">Típusok törlése</NavDropdown.Item>
            <NavDropdown.Item href="TermekTorles">Termék törlése</NavDropdown.Item>
            <NavDropdown.Item href="ReceptTorles">Recept törlése</NavDropdown.Item>

            </NavDropdown.Item>
          </NavDropdown>
          
          )}

          {showModeratorBoard && (   

          <NavDropdown title="Moderátor menü" id="collasible-nav-dropdown">

            <NavDropdown.Item href="TipusFelvitel">Tipus felvitele</NavDropdown.Item>
            <NavDropdown.Item href="EtelTipusFelvitel">Étel tipus felvitele</NavDropdown.Item>
            <NavDropdown.Item href="TermekFelvitel">Termék felvitele</NavDropdown.Item>
            <NavDropdown.Item href="ReceptFelvitel">Recept felvitele</NavDropdown.Item>
            <NavDropdown.Item href="ReceptKategoriaFelvitel">Recept kategória felvitele</NavDropdown.Item>
            
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">

            <NavDropdown.Item href="/TipusTorles">Típusok törlése</NavDropdown.Item>
            <NavDropdown.Item href="TermekTorles">Termék törlése</NavDropdown.Item>

            <NavDropdown.Item href="TermekTorles">ReceptTorles</NavDropdown.Item>

            </NavDropdown.Item>
          </NavDropdown>
          
          )}


        </Nav>
        {currentUser ?

(
<Nav>
 <Nav.Link href="/profile">
 {currentUser.username}
 </Nav.Link>
 <Nav.Link href="/login" onClick={this.logOut}>
 Kijelentkezés

</Nav.Link> </Nav>
)
 :

(

<Nav>
 <Nav.Link href="/
login"> Bejelentkezés </Nav.Link>

<Nav.Link href="/register">
 Regisztráció
</Nav.Link>
 </Nav>
)}
      </Navbar.Collapse>
    </Navbar>







        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />

            <Route path="/Proba" component={Proba} />
            <Route path="/TipusTorles" component={TipusTorles} />
            <Route path="/Fooldal" component={Fooldal} />
            <Route path="/TermekTorles" component={TermekTorles} />
            <Route path="/TipusFelvitel" component={TipusFelvitel} />
            <Route path="/EtelTipusFelvitel" component={EtelTipusFelvitel} />
            <Route path="/TermekFelvitel" component={TermekFelvitel} />
            <Route path="/ReceptFelvitel" component={ReceptFelvitel} />
            <Route path="/ReceptKategoriaFelvitel" component={ReceptKategoriaFelvitel} />
            <Route path="/ReceptTorles" component={ReceptTorles} />

            <Route path="/ReceptLekerdez" component={ReceptLekerdez} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
