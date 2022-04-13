import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fd5294;
`;

const EventItem = styled.div`
  background-color: #ffffff83;
  padding: 1em;
  margin: 1em 0;
  font-size: 1em;

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-weight: 900;
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }

  li {
    margin: 1em 0;
  }
`;

const EventsList = ({ site }) => {
  const events = useSelector((state) => state.events[site]);
  return (
    <Wrapper>
      {events.map((item) => (
        <EventItem key={uuidv4()}>
          <div>
            <h2>{item.name}</h2>
            {site === 'All Events' && (<h3>{item.site}</h3>)}
            <h3>{(item.status === 'CODING') ? 'Ongoing' : 'Not Started'}</h3>
          </div>
          <ul>
            <li>
              <span>Starting From:</span>
              {' '}
              {Date(Date.parse(item.start_time))}
            </li>
            <li>
              <span>Ends:</span>
              {' '}
              {Date(Date.parse(item.end_time))}
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href={item.url}>Official Link</a>
            </li>
          </ul>
        </EventItem>
      ))}
    </Wrapper>
  );
};

EventsList.propTypes = {
  site: PropTypes.string.isRequired,
};

export default EventsList;
