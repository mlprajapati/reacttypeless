import React, { useState } from 'react';
import styled from 'styled-components';
import { Tree } from './tree';
import { ItemLink } from './link';
import { Button } from 'src/components/Button';
import './tree.css';

const DIV = styled.div`
  max-width: 100%;
  overflow: auto;
  font: 12px;
  height: auto;
`;
const UL = styled.ul`
  list-style: none;
  list-style-type: none;
  list-style-image: none;
  color: #CCC};
  padding: 5px 5px 5px 25px;
`;
const LI = styled.li`
  margin-left: 0;
  margin-right: 0;
  padding: 5px 0;
  margin: 2px 0;
`;
export interface TreeViewPops {
  treeData: any[];
  rootNameKey: string;
  displayNameKey: string;
  onExpandedNode?: Function;
  onSelectedNode?: Function;
  expandAll?: boolean;
  className?: string;
  style?: object;
}
export const TreeView = (props: TreeViewPops) => {
  const {
    treeData,
    rootNameKey,
    displayNameKey,
    onExpandedNode,
    onSelectedNode,
    expandAll,
    className,
    style,
  } = props;
  const [expand, setExpand] = useState(false);

  const getId = (id: string) => {
    if (!id) return '';
    let ids: string[] = id.split('_');
    ids.shift();
    return ids.join('_');
  };

  const updateClassOnNode = (element: HTMLElement) => {
    // debugger;
    if (element.classList) {
      element.classList.toggle('tree-open');
    } else {
      let classes = element.className.split(' ');
      let i = classes.indexOf('tree-open');
      if (i >= 0) classes.splice(i, 1);
      else classes.push('tree-open');
      element.className = classes.join(' ');
    }
  };
  const updateAllClassOnNode = (element: HTMLElement) => {
    let classes = element.className.split(' ');
    let i = classes.indexOf('tree-open');
    if (!expand) {
      if (i >= 0) classes.splice(i, 1);
      classes.push('tree-open');
    } else {
      if (i >= 0) classes.splice(i, 1);
    }
    element.className = classes.join(' ');
    // }
  };
  const expandAllNode = (e: any) => {
    if (e) {
      e.preventDefault();
    }
    let ex = !expand;
    setExpand(ex);
    nestedChild(document.getElementById('treeviewul') as HTMLElement);
  };
  const nestedChild = (element: HTMLElement) => {
    let child = element.getElementsByTagName('ul');
    console.log('child ', child.length);
    for (let i = 0; i < child.length; i++) {
      updateAllClassOnNode(child[i]);
    }

    let imgElements = element.getElementsByTagName('IMG');
    for (let i = 0; i < imgElements.length; i++) {
      rotateAll(imgElements[i], imgElements[i].nodeName);
    }
  };
  const getTargetNode = async (event: any) => {
    if (event) {
      event.preventDefault();
    }
    const elementId: string = getId(event.target.id),
      element: HTMLElement = document.getElementById(
        `children_${elementId}`
      ) as HTMLElement;
    if (element) {
      if (event.target && event.target.nodeName) {
        rotate(event.target, event.target.nodeName);
      }

      updateClassOnNode(element);
      if (event.target.dataset.tree && onExpandedNode) {
        onExpandedNode({
          elementId,
          details: JSON.parse(event.target.dataset.tree),
        });
      }
    } else {
      if (event.target.dataset.tree && onSelectedNode) {
        onSelectedNode({
          elementId,
          details: JSON.parse(event.target.dataset.tree),
        });
      }
    }
  };

  const rotate = (node: any, nodeName: string) => {
    if (nodeName === 'IMG') {
      node.classList.toggle('rotate');
    } else {
      if (node.previousSibling && node.previousSibling.nodeName === 'IMG') {
        node.previousSibling.classList.toggle('rotate');
      }
    }
  };
  const rotateAll = (node: any, nodeName: string) => {
    if (nodeName === 'IMG') {
      // node.classList.toggle("rotate");
      let classes: string[] = node.className.split(' ');
      innerRotate(classes, expand);
      node.className = classes.join(' ');
    } else {
      if (node.previousSibling.nodeName === 'IMG') {
        // node.previousSibling.classList.toggle("rotate");
        let classes: string[] = node.previousSibling.className.split(' ');
        innerRotate(classes, expand);
        node.previousSibling.className = classes.join(' ');
      }
    }
    function innerRotate(classes: string[], expand: boolean) {
      let i = classes.indexOf('rotate');
      if (!expand) {
        if (i >= 0) classes.splice(i, 1);
        classes.push('rotate');
      } else {
        if (i >= 0) classes.splice(i, 1);
      }
    }
  };

  return (
    <div className={className} style={style}>
      {expandAll && (
        <div className="expand-collapse-button">
          <Button
            onClick={(e: any) => {
              expandAllNode(e);
            }}
          >
            {expand && <i className="fa fa-minus-square-o ">-</i>}
            {!expand && <i className="fa fa-plus-square-o">+</i>}
          </Button>
        </div>
      )}
      <DIV className="tree-view-container">
        <UL id="treeviewul">
          {treeData &&
            treeData.map((tree, index) => {
              return (
                <LI
                  key={index}
                  id={'' + index}
                  className={
                    tree[rootNameKey] && tree[rootNameKey].length > 0
                      ? 'link-with-icon'
                      : ''
                  }
                >
                  {tree[rootNameKey] && tree[rootNameKey].length > 0 ? (
                    <Tree
                      tree={tree}
                      id={'' + index}
                      rootNameKey={rootNameKey}
                      displayNameKey={displayNameKey}
                      itemClick={getTargetNode}
                    />
                  ) : (
                    <ItemLink
                      itemClick={getTargetNode}
                      data={tree}
                      displayName={displayNameKey}
                      id={'' + index}
                      level={tree[rootNameKey].length > 0 ? false : true}
                    />
                  )}
                </LI>
              );
            })}
        </UL>
      </DIV>
    </div>
  );
};
