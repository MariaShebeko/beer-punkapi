import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { textCl, accentTextCl, accentBgCl } from '../../styles/styleVars';

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/beers">Beers</Link>
      <Link to="/beers/favourite">Favourite</Link>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 20px;

  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;

  background-color: ${textCl};
  box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1); ;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${accentTextCl};
  &.active,
  &:hover {
    color: ${accentBgCl};
    transition: color 300ms ease-in-out;
  }
`;
export default Navigation;
