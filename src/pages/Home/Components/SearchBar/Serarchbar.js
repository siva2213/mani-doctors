import React from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as SearchWhite } from "../../assets/ep_searchWhite.svg";

const SearchBarContainer = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 24px;
  position: relative;
`;
const SearchIcon = styled.div`
  position: absolute;
  height: 20px;
  top: 13px;
  left: 15px;
`;

const SearchBar = styled.input`
  background: ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.shadowMd};
  border-radius: 30px;
  border: none;
  outline: none;
  height: 45px;
  width: 100%;
  padding-left: 45px;
  &::placeholder {
    font-size: 16px;
    font-weight: 600;
    color: #636363;
  }
`;

const Serarchbar = (props) => {
  return (
    <div>
      <SearchBarContainer>
        <SearchBar type='search' placeholder='Search here' />
        <SearchIcon>
          {props.darkMode ? (
            <SearchWhite style={{ position: "absolute" }} />
          ) : (
            <Search style={{ position: "absolute" }} />
          )}
        </SearchIcon>
      </SearchBarContainer>
    </div>
  );
};

export default Serarchbar;
