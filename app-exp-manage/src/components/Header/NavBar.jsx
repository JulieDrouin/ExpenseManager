import Toggle from "../DarkMode/Toggler";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = ({ theme, toggleTheme }) => {
  return (
    <Navbar bg="light" expand="lg" style={{ fontFamily: "Oswald" }}>
      <Navbar.Brand href="/profil">Gestionnaire de Dépenses</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-center">
        <Nav className="">
          <Nav.Link href="/profil">Mon profil</Nav.Link>
          <NavDropdown title="Mon budget" id="basic-nav-dropdown">
            <NavDropdown.Item href="/gain/2.gainList">
              Voir tout mes gains
            </NavDropdown.Item>
            <NavDropdown.Item href="/gain/2.gainNew">
              Ajouter un gain
            </NavDropdown.Item>
            <NavDropdown.Item href="/gain/2.gainEdit">
              Modifier un gain
            </NavDropdown.Item>
            <NavDropdown.Item href="/gain/2.gainDelete">
              Supprimer un gain
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Mes dépenses" id="basic-nav-dropdown">
            <NavDropdown.Item href="/depense/3.depenseList">
              Voir toutes mes dépenses
            </NavDropdown.Item>
            <NavDropdown.Item href="/depense/3.depenseNew">
              Ajouter une dépense
            </NavDropdown.Item>
            <NavDropdown.Item href="/depense/3.depenseEdit">
              Modifier une dépense
            </NavDropdown.Item>
            <NavDropdown.Item href="/depense/3.depenseDelete">
              Supprimer une dépense
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Mes listes de courses" id="basic-nav-dropdown">
            <NavDropdown.Item href="/shopping/4.shoppingList">
              Voir toutes mes listes de courses
            </NavDropdown.Item>
            <NavDropdown.Item href="/shopping/4.shoppingNew">
              Ajouter une liste de courses
            </NavDropdown.Item>
            <NavDropdown.Item href="/shopping/4.shoppingEdit">
              Modifier une liste de courses
            </NavDropdown.Item>
            <NavDropdown.Item href="/shopping/4.shoppingDelete">
              Supprimer une liste de courses
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </Navbar>
  );
};
export default NavBar;
