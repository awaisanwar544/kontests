import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../redux/events';

const Events = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <p>{Object.keys(events).length}</p>
      </header>
    </div>
  );
};

export default Events;
