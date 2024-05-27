import { Header, Link, Nav } from './NavBar.styled';

function NavBar() {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </Nav>
      </Header>
    </>
  );
}
export default NavBar;