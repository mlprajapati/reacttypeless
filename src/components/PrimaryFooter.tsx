import React from 'react';
import styled from 'styled-components';
const Theme = {
  colors: {
    bg: `#fff`,
    dark: `#24292e`,
    light: `#EEEEEE`,
    red: `#ff5851`,
  },
  fonts: {
    heading: `Times New Roman, Times, serif, sans-serif`,
  },
};

const FooterNavbar = styled.div`
  flex-shrink: 0;
  background: ${Theme.colors.light};
  font-family: ${Theme.fonts.heading};
  color: ${Theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  a {
    color: ${Theme.colors.dark};
    text-decoration: none;
  }
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0 0.5rem;
  margin: 0.1rem;
  -webkit-overflow-scrolling: touch;
`;

const StyledLi = styled.li`
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: ${Theme.colors.dark};
  display: flex;
  font-size: 14px;
  height: 50px;
  justify-content: center;
  line-height: 16px;
  margin: 0 10px;
  text-decoration: none;
  white-space: nowrap;
`;

export const PrimaryFooter = (props: {
  links: Array<{ name: string; to: string }>;
}) => {
  const { links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string }) => (
      <StyledLi key={link.name}>
        <a href={link.to}>{link.name}</a>
      </StyledLi>
    ));
  return (
    <FooterNavbar>
      <StyledUl>
        <NavLinks />
      </StyledUl>
    </FooterNavbar>
  );
};
