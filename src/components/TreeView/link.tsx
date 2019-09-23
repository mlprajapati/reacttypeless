import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  line-height: 24px;
  height: 24px;
  text-decoration: none;
  color: inherit;
  display: inline-block;
  white-space: nowrap;
  padding: 0 4px 0 1px;
  margin: 0;
  vertical-align: top;
`;
const IMG = styled.img`
  height: 12px;
  line-height: 24px;
  background-repeat: no-repeat;
  background-color: transparent;
  display: inline-block;
  text-decoration: none;
  margin: 0;
  padding: 5px;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
`;
export interface ItemLinkProp {
  level: boolean;
  id: string;
  img?: string;
  displayName: string;
  data: any;
  itemClick: Function;
}
export const ItemLink = (props: ItemLinkProp) => {
  const { level, id, img, displayName, data, itemClick } = props;
  return (
    <>
      {img && (
        <IMG
          id={`icon_${id}`}
          src={img}
          alt={displayName}
          style={{ height: '20px' }}
        />
      )}
      {level && (
        <A
          data-tree={JSON.stringify(data)}
          aria-label={displayName}
          title={displayName}
          id={`link_${id}`}
          href="#"
          className="tree-active"
          onClick={(e: any) => itemClick(e)}
        >
          {displayName}
        </A>
      )}
      {!level && (
        <A
          data-tree={JSON.stringify(data)}
          id={`link_${id}`}
          title={displayName}
          aria-label={displayName}
          className="tree-active"
          href="#"
          onClick={(e: any) => itemClick(e)}
        >
          {displayName}
        </A>
      )}
    </>
  );
};
