import React from 'react';
import styled from 'styled-components';
import Arrow from './arrow.svg';
import { ItemLink } from './link';

const StyledUL = styled.ul`
  list-style: none;
  list-style-type: none;
  list-style-image: none;
  color: #ccc;
`;
const LI = styled.li`
  padding: 5px 0;
  margin: 2px 0;
`;
export interface TreeProp {
  tree: any;
  id: string;
  itemClick: Function;
  displayNameKey: string;
  rootNameKey: string;
}
export const Tree = (props: TreeProp) => {
  const { tree, id, itemClick, displayNameKey, rootNameKey } = props;
  return (
    <>
      <ItemLink
        itemClick={(e: any) => {
          itemClick(e);
        }}
        data={tree}
        displayName={tree[displayNameKey]}
        id={id}
        img={Arrow}
        level={tree[rootNameKey] && tree[rootNameKey].length > 0 ? false : true}
      />
      <StyledUL id={`children_${id}`} className="tree-close">
        {tree[rootNameKey].map((tree: any, index: number) => {
          return (
            <LI
              key={index}
              id={id + '_' + index}
              className={
                tree[rootNameKey] && tree[rootNameKey].length > 0
                  ? 'link-with-icon'
                  : ''
              }
            >
              {tree[rootNameKey] && tree[rootNameKey].length > 0 ? (
                <Tree
                  tree={tree}
                  id={id + '_' + index}
                  rootNameKey={rootNameKey}
                  displayNameKey={displayNameKey}
                  itemClick={itemClick}
                />
              ) : (
                <ItemLink
                  itemClick={(e: any) => {
                    itemClick(e);
                  }}
                  data={tree}
                  displayName={tree[displayNameKey]}
                  id={id + '_' + index}
                  level={
                    tree[rootNameKey] && tree[rootNameKey].length > 0
                      ? false
                      : true
                  }
                />
              )}
            </LI>
          );
        })}
      </StyledUL>
    </>
  );
};
