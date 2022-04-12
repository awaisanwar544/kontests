import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 2em;
  background-color: #fd5294;
  text-align: center;

  h2 {
    font-size: 3em !important;
    font-weight: 900;
    color: #ffffffd0;
  }

  span {
    color: #c31d5d;
  }
`;

const EventCat = ({ category }) => {
  const events = useSelector((state) => state.events);
  return (
    <Wrapper>
      <h2>
        {category}
        <br />
        <span>{events[category].length}</span>
      </h2>
    </Wrapper>
  );
};

EventCat.propTypes = {
  category: PropTypes.string.isRequired,
};

export default EventCat;
