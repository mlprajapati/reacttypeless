import * as React from 'react';
import { GlobalActions } from 'src/features/global/interface';
import styled from 'styled-components';
import { useActions } from 'typeless';
import { PrimaryFooter } from './PrimaryFooter';
import { PrimaryHeader } from './PrimaryHeader';
import { NavigationBar } from './NavigationBar';

const Main = styled.main`
  padding: 20px;
  flex-grow: 1;
  overflow: auto;
  min-height: 2em;
`;
const Brand = styled.a`
  font-weight: bold;
  font-style: italic;
  margin-left: 1rem;
  padding-right: 1rem;
`;
interface DashboardProps {
  className?: string;
  children: React.ReactNode;
}

export const Dashboard = (props: DashboardProps) => {
  const { children } = props;
  const { logout } = useActions(GlobalActions);
  const links: Array<{ name: string; to: string; action?: any }> = [
    { name: 'About Me', to: '/about' },
    { name: 'Blog', to: '/blog' },
    { name: 'Developement', to: '/dev' },
    { name: 'Graphic Design', to: '/design' },
    { name: 'logout', to: '#', action: logout },
  ];
  return (
    <>
      <PrimaryHeader>
        <Brand href="#">Starter</Brand>
        <NavigationBar links={links}></NavigationBar>
      </PrimaryHeader>

      <Main>{children}</Main>
      <PrimaryFooter links={links}></PrimaryFooter>
    </>
  );
};
