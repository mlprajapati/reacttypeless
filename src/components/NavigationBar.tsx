import * as React from 'react';
import styled from 'styled-components';
import { NavItem, NavItemProp } from './NavItem';

const Navbar = styled.nav`
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: end;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0 0.5rem;
  margin: 0.1rem;
  -webkit-overflow-scrolling: touch;
`;

export const NavigationBar = (props: { links: Array<NavItemProp> }) => {
  const { links } = props;
  const NavLinks: any = () =>
    links.map((link: NavItemProp) => (
      <NavItem
        key={'navitemkey_' + link.name}
        name={link.name}
        to={link.to}
        action={link.action}
      />
    ));
  return (
    <Navbar>
      <Ul>
        <NavLinks />
      </Ul>
    </Navbar>
  );
};
