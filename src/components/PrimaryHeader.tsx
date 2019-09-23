import React, { ReactNode } from 'react';
import styled from 'styled-components';
const Theme = {
  colors: {
    bg: `#fff`,
    dark: `#24292e`,
    light: `#EEEEEE`,
    red: `#ff5851`,
  },
  fonts: {
    body: `Times New Roman, Times, serif, sans-serif`,
    heading: `Times New Roman, Times, serif, sans-serif`,
  },
};
const Header = styled.header`
  flex-shrink: 0;
  background: ${Theme.colors.dark};
  font-family: ${Theme.fonts.heading};
  color: ${Theme.colors.light};
  display: flex;
  padding: 0.1rem 0.1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;
export interface PrimaryHeaderProp {
  children?: ReactNode;
}
export const PrimaryHeader = (props: PrimaryHeaderProp) => {
  const { children } = props;
  return <Header>{children}</Header>;
};
