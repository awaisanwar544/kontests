import React, { useEffect, useState } from 'react';
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
  input {
    margin: 1em;
    padding: 1em;
    font-size: 2em;
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
  const [filter, setFilter] = useState();
  const list = Object.keys(events).filter((el) => el !== 'All Events');
  const filterHandler = (event) => {
    setFilter(event.target.value);
  };
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
      <input
        type="text"
        placeholder="Search Here"
        onChange={filterHandler}
      />
      <ListWrapper>
        {!filter && list.length > 0 && (
          list.map((item) => <NavLink key={item} to={item.replace(/\s/g, '')}><EventCat category={item} /></NavLink>)
        )}
        {filter && list.length > 0 && (
          list.filter((item) => (item.toLowerCase().includes(filter))).map((item) => <NavLink key={item} to={item.replace(/\s/g, '')}><EventCat category={item} /></NavLink>)
        )}
      </ListWrapper>
    </MainWrapper>
  );
};

export default Events;
