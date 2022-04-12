import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Events from '../components/Events';
import Header from '../components/Header';
import EventCat from '../components/EventCat';
import EventsList from '../components/EventsList';

jest.mock('react-redux');

describe('App Components Render Correctly', () => {
  it('Header renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Events renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Events />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('EventCat renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <EventCat category="" />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('EventsList renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <EventsList site="" />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
