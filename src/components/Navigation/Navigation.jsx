import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/beers">Beers</NavLink>
    </nav>
  );
};

export default Navigation;
