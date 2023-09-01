import React, { useState } from 'react';
import { Useproductcontext } from '../context/Productcontext';
import styled from 'styled-components';
import {useFiltercontext} from "../context/Sortcontext";


const Filterproducts = () => {
  const { Sortproducts } = useFiltercontext();
  const [isOpen, setIsOpen] = useState(false);
  const [change, setChange] = useState('Filter');
  const {Sortfun}=useFiltercontext();


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = (option) => {
    setChange(option);
    Sortfun(option);
    setIsOpen(false);
  };

  return (
    <>
      <Headline>
        <h1>{`${Sortproducts.length} Products Available`}</h1>
      </Headline>
      <Dropdown>
        <DropdownContainer>
          <DropdownButton onClick={toggleDropdown}>{change}</DropdownButton>
          <DropdownContent open={isOpen}>
            <DropdownItem onClick={() => handleDropdownItemClick('Low to High')}>Low to High</DropdownItem>
            <DropdownItem onClick={() => handleDropdownItemClick('High to low')}>High to low</DropdownItem>
            <DropdownItem onClick={() => handleDropdownItemClick('A-Z')}>A-Z</DropdownItem>
          </DropdownContent>
        </DropdownContainer>
      </Dropdown>
    </>
  );
};

const Headline = styled.div`
  flex: 8.5;
  h1 {
    text-align: center;
    font-family: 'Mulish', sans-serif;
    @media only screen and (max-width: 768px) {
      font-size: 13px;
    }
  }
`;

const Dropdown = styled.div`
  flex: 1.5;
  margin: auto;
  width: auto;
  height: auto;
  
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: black;
  color: white;
  width:140px;
  padding: 10px 15px 10px 15px;
  font-size: 19px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
@media only screen and (max-width: 768px) {
    padding: 5px 0px 5px 0px;
    width:60px;
    font-size: 10px;
}
`;

const DropdownContent = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
@media only screen and (max-width: 768px) { width:60px;}
`;

const DropdownItem = styled.a`
  display: block;
  width: auto;
  padding: 14px 20px 15px 20px;
  font-size: 19px;
  cursor: pointer;
  text-decoration: none;
  color: black;
@media only screen and (max-width: 768px) {
    padding: 5px 5px 5px 5px;
    width:80px;
    font-size: 9px;
}
  &:hover {
    background-color: #f1f1f1;
  }
`;

export default Filterproducts;
