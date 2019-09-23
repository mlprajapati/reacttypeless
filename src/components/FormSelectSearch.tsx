import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const SelectWapper = styled.div`
  position: relative;
`;
const StyledTextContainer = styled.div`
  color: #000;
  background: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 0.75rem;
  border-radius: 0.2rem;
  min-height: 2.75rem;
  position: relative;
  width: 100%;
  border: solid 0.5px grey;
`;
const StyledSelectedItemText = styled.div`
  width: 90%;
  float: left;
  position: relative;
`;
const StyledClearSearch = styled.div`
  position: relative;
  float: right;
  width: 20px;
  height: 20px;
  background: #e5e5e5;
  text-align: center;
  line-height: 19px;
  border-radius: 50%;
  cursor: pointer;
`;
const StyledDropdownButton = styled.button`
  font-size: 17px;
  top: 0px;
  right: 0px;
  width: 45px !important;
  position: absolute;
  border: unset;
  line-height: 0px;
  background-color: transparent !important;
  height: 45px !important;
`;
const StyledSearchContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 5px;
`;
const StyledItemContainer = styled.ul`
  display: none;
  background: #fff;
  overflow: auto;
  position: absolute;
  top: 100%;
  width: 99%;
  z-index: 10;
  min-height: 100%;
  margin: auto;
  box-shadow: 2px 2px 4px #999;
  padding: 0px;
`;
const StyledItem = styled.li`
  background-color: #fff;
  height: auto;
  box-shadow: 2px 2px 4px #999;
  margin: 0 0.1rem;
  padding: 0.7rem;
  color: #000;
  font-size: 12px;
  cursor: pointer;
  list-style: none;
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  line-height: 1.5;
  color: #495057;
  font-size: 16px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    outline-offset: -2px;
  }
`;

export interface OptionProperties {
  optionValueKey: string;
  optionDisplayNameKey: string;
}
export interface SelectInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  optionProperties: OptionProperties;
  selectedValue: any;
  name: string;
  items: any[];
  label: string;
  error?: string | null;
  onOptionSelect?: Function;
  mainContainer?: HTMLElement;
}
const _SelectInput = (props: SelectInputProps) => {
  const {
    className,
    items,
    label,
    name,
    optionProperties,
    selectedValue,
    onOptionSelect,
    mainContainer,
    error,
    ...rest
  } = props;
  const [options, setOptions] = useState(items);
  const [selValue, setSelValue] = useState(selectedValue);
  // const [searchValue, setSearchValue] = useState('');
  const inputElItems: any = useRef<HTMLElement>(null);
  const inputElSearchContainer: any = useRef<HTMLElement>(null);
  const inputElSearch: any = useRef<HTMLInputElement>(null);
  const inputElTextContainer: any = useRef<HTMLElement>(null);
  const inputElDropdownSearch: any = useRef<HTMLElement>(null);
  var timer: any = null;

  useEffect(() => {
    //setSelValue(selectedValue);
    setSearchOptionState();
    popupPosition();

    window.onclick = (event: any) => {
      if (
        !event.target.matches('.dropdown') &&
        !event.target.matches('.textContainer') &&
        !event.target.matches('.searchInput') &&
        !event.target.matches('.clearSearch') &&
        !event.target.matches('.dropdown-btn') &&
        !event.target.matches('.selectedItemText')
      ) {
        closeDropdown(event);
      }
    };
  });

  const dropdownOpen = (event: any) => {
    popupPosition();
    closeDropdown(event);
    if (inputElSearchContainer.current !== null) {
      inputElSearchContainer.current.style.display = 'block';
    }
    if (inputElTextContainer.current) {
      inputElTextContainer.current.style.display = 'none';
    }
    if (inputElItems.current !== null) {
      inputElItems.current.style.display = 'block';
    }
    if (inputElSearch.current !== null) {
      inputElSearch.current.focus();
    }

    window.onresize = () => {
      popupPosition();
    };
    window.onscroll = () => {
      popupPosition();
    };
  };
  const dropdownItemSelect = (selectedVal: any) => {
    setSelValue(selectedVal);
    if (inputElSearchContainer) {
    }
    if (inputElSearchContainer.current !== null) {
      inputElSearchContainer.current.style.display = 'none';
    }
    if (inputElTextContainer.current !== null) {
      inputElTextContainer.current.style.display = 'block';
    }

    if (onOptionSelect) {
      onOptionSelect(selectedVal);
    }
  };
  const clearSearch = (e: any) => {
    setSelValue('');
    setOptions(items);
    if (inputElSearchContainer.current !== null) {
      inputElSearchContainer.current.style.display = 'block';
    }
    if (inputElSearchContainer.current !== null) {
      inputElSearchContainer.current.focus();
    }
    if (inputElTextContainer.current !== null) {
      inputElTextContainer.current.style.display = 'none';
    }
    if (inputElSearch.current != null) {
      inputElSearch.current.value = '';
    }
    if (inputElItems.current !== null) {
      inputElItems.current.style.display = 'block';
    }

    if (onOptionSelect) {
      onOptionSelect('');
    }
    e.persist();
  };

  const filterOption = (event: any) => {
    let title: string = '';
    let searchValue: any =
      inputElSearch.current !== null ? inputElSearch.current.value : '';
    clearTimeout(timer);
    if (items.length > 0) {
      let filterList = items.filter(item => {
        title = item.name;
        return title
          .toLocaleLowerCase()
          .startsWith(searchValue.toLocaleLowerCase());
      });
      setOptions(filterList);
    }
    //}, 500);

    event.persist();
  };
  const popupPosition = () => {
    var mainContainerEl: HTMLElement = mainContainer
      ? mainContainer
      : (document.getElementById(name + '_dropdownSearch') as HTMLElement);
    var mainContainerHeight: number = mainContainerEl.clientHeight;
    var element: any = inputElDropdownSearch.current;
    if (element) {
      var elementTopPosition: number = element.getBoundingClientRect().y;
      var midHeight: number = mainContainerHeight / 2;
      var optionsContainerHeight: number = options.length * 42;
      var popupContainerHeight: number =
        optionsContainerHeight > midHeight - 42
          ? midHeight - 45
          : optionsContainerHeight;
      var popopStartPosition: string =
        midHeight > elementTopPosition ? '0' : '-' + popupContainerHeight;
      if (inputElItems.current !== null) {
        inputElItems.current.style.height = popupContainerHeight + 'px';
      }
      var popopTopPosition: string =
        midHeight > elementTopPosition ? '100%' : '50px';
      if (inputElItems.current !== null) {
        inputElItems.current.style.top = popopTopPosition;
      }
      //document.getElementById(this.props.name + "_items").style.top =
      //popopStartPosition + "px";
      if (inputElItems.current !== null) {
        inputElItems.current.style.transform =
          'translate3d(2px,' + popopStartPosition + 'px, 50px)';
      }
      var boxShadow: string =
        inputElItems.current !== null
          ? (inputElItems.current.style['boxShadow'] = '2px 2px 4px #999')
          : '';
      var arrBoxShadow: string[] = boxShadow.split(' ');
      if (
        arrBoxShadow &&
        arrBoxShadow.length == 4 &&
        inputElItems.current !== null
      ) {
        inputElItems.current.style['boxShadow'] =
          arrBoxShadow[0] +
          ' ' +
          (midHeight > elementTopPosition ? '' : '-') +
          arrBoxShadow[1] +
          ' ' +
          arrBoxShadow[2] +
          ' ' +
          arrBoxShadow[3];
      }
    }
  };
  const setSearchOptionState = () => {
    if (selValue !== '') {
      if (inputElSearchContainer.current !== null) {
        inputElSearchContainer.current.style.display = 'none';
      }
      if (inputElTextContainer.current !== null) {
        inputElTextContainer.current.style.display = 'block';
      }
    } else {
      if (inputElSearchContainer.current !== null) {
        inputElSearchContainer.current.style.display = 'block';
      }
      if (inputElTextContainer.current !== null) {
        inputElTextContainer.current.style.display = 'none';
      }
    }
  };
  const closeDropdown = (event: any) => {
    const textContainers = document.getElementsByClassName('textContainer');
    if (textContainers.length > 0) {
      for (let i = 0; i < textContainers.length; i++) {
        const element = textContainers[i] as HTMLElement;
        element.style.display = 'block';
      }
    }
    const searchContainers = document.getElementsByClassName('searchContainer');
    if (searchContainers.length > 0) {
      for (let i = 0; i < searchContainers.length; i++) {
        const element = searchContainers[i] as HTMLElement;
        element.style.display = 'none';
      }
    }
    const dropdowns = document.getElementsByClassName('item-container');
    if (dropdowns.length > 0) {
      for (let i = 0; i < dropdowns.length; i++) {
        const element = dropdowns[i] as HTMLElement;
        if (
          element.style.display === 'block' &&
          !event.target.matches('.searchInput')
        ) {
          element.style.display = 'none';
        }
      }
    }
  };

  return (
    <SelectWapper
      ref={inputElDropdownSearch}
      id={name + '_dropdownSearch'}
      className={className + ' hc dropdown'}
      tabIndex={Number(0)}
      onClick={event => dropdownOpen(event)}
      // onKeyUp={this.filterOption}
    >
      <StyledTextContainer
        ref={inputElTextContainer}
        className="textContainer"
        id={name + '_textContainer'}
      >
        <StyledSelectedItemText
          className="selectedItemText"
          id={name + '_selectedItemText'}
        >
          {selValue}
        </StyledSelectedItemText>
        &nbsp;
        {selValue !== '' && (
          <StyledClearSearch
            id={name + '_clearSearch'}
            className="clearSearch"
            onClick={event => {
              clearSearch(event);
            }}
          >
            X
          </StyledClearSearch>
        )}
        {selValue === '' && (
          <StyledDropdownButton
            id={name + '_dropdown-btn'}
            aria-haspopup="true"
            aria-expanded="true"
            type="button"
            className="dropdown-toggle dropdown-btn"
            onClick={event => dropdownOpen(event)}
          />
        )}
      </StyledTextContainer>
      <StyledSearchContainer
        ref={inputElSearchContainer}
        className="searchContainer"
        id={name + '_searchContainer'}
      >
        <StyledInput
          ref={inputElSearch}
          type="text"
          id={name + '_searchInput'}
          className="searchInput"
          onChange={filterOption}
          autoComplete="off"
          {...rest}
        />
        <StyledDropdownButton
          id={name + '_dropdown-btn'}
          aria-haspopup="true"
          aria-expanded="true"
          type="button"
          className="dropdown-toggle dropdown-btn"
          onClick={event => dropdownOpen(event)}
        />
      </StyledSearchContainer>
      <StyledItemContainer
        ref={inputElItems}
        id={name + '_items'}
        className="item-container"
        tabIndex={Number(-1)}
        style={{ display: 'block !important' }}
      >
        {options.map(item => (
          <StyledItem
            key={item[optionProperties.optionValueKey]}
            className="item"
            onClick={() =>
              dropdownItemSelect(item[optionProperties.optionValueKey])
            }
          >
            {item[optionProperties.optionDisplayNameKey]}
          </StyledItem>
        ))}
      </StyledItemContainer>
    </SelectWapper>
  );
};
export const SelectInput = styled(_SelectInput)`
  width: 100%;
  display: block;
  ${props =>
    props.error &&
    css`
      ${StyledInput} {
        border-color: #dc3545;
        &:focus {
          box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.25);
        }
      }
    `};
`;
