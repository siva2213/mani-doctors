import React from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as SearchWhite } from "../assets/ep_searchWhite.svg";

const SearchBarContainer = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  padding-bottom: 10px;
  position: relative;
`;
const SearchIcon = styled.div`
  position: absolute;
  height: 20px;
  top: 13px;
  left: 15px;
`;

const SearchBar = styled.input`
  background: ${(props) => props.theme.bg};
  box-shadow: ${(props) => props.theme.transShadow};
  border-radius: 30px;
  border: none;
  outline: none;
  height: 45px;
  width: 100%;
  color: #fff;
  font-weight: 600;
  padding-left: 45px;
  font-size: 16px;
  &::placeholder {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }
`;

const SearchTrans = (props) => {
  return (
    <div>
      <SearchBarContainer>
        <SearchBar type='text' placeholder='Search here' />
        <SearchIcon>
          <SearchWhite style={{ position: "absolute" }} />
        </SearchIcon>
      </SearchBarContainer>
    </div>
  );
};

export default SearchTrans;
