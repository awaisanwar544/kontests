import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { getEvents } from '../redux/eventsReducer';
import EventCat from './EventCat';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  h2 {
    color: #ffffff;
    font-size: 2em;
  }
  a {
    text-decoration: none;
  }
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5em;
  row-gap: 0.5em;
`;

const Events = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const list = Object.keys(events).filter((el) => el !== 'All Events');
  useEffect(() => {
    if (list.length === 0) {
      dispatch(getEvents());
    }
  }, []);
  return (
    <MainWrapper className="App">
      {events['All Events'] && (
        <NavLink to="AllEvents"><EventCat category="All Events" /></NavLink>
      )}
      <h2>List by Sites</h2>
      <ListWrapper>
        {list.length > 0 && (
          list.map((item) => <NavLink key={item} to={item.replace(/\s/g, '')}><EventCat category={item} /></NavLink>)
        )}
      </ListWrapper>
    </MainWrapper>
  );
};

export default Events;
