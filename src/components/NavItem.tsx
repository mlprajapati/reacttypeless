import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
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
  color: #999;
  display: flex;
  font-size: 14px;
  height: 50px;
  justify-content: center;
  line-height: 16px;
  margin: 0 10px;
  text-decoration: none;
  white-space: nowrap;
`;
export interface NavItemProp {
  name: string;
  to: string;
  action?: any;
}
export const NavItem = (props: NavItemProp) => {
  const { name, to, action } = props;
  return (
    <Li key={name}>
      {!action && to && <a href={to}>{name}</a>}
      {action && to === '#' && (
        <a href={to} onClick={action}>
          {name}
        </a>
      )}
    </Li>
  );
};
