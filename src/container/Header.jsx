import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 3em;
    color: #ffffffd0;
  }

  a {
    font-size: 3em;
    color: #ffffffd0;
    text-decoration: none;
  }
`;

const Header = () => (
  <Wrapper>
    <div>
      {window.location.pathname === '/' && (<NavLink to="/">&#60; Home</NavLink>)}
    </div>
    <div>
      <h1>Online Tech Events</h1>
    </div>
    <div />
  </Wrapper>
);

export default Header;
