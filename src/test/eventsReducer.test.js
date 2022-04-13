import eventsReducer from '../redux/eventsReducer';

const state = {
  site1: [{ name: 'Event 1' }],
  site2: [{ name: 'Event 2' }],
};

describe('Events Reducer', () => {
  it('when action is FETCH_EVENTS', () => {
    const action = { type: 'FETCH_EVENTS', payload: state };
    const result = eventsReducer({}, action);
    expect(result).toEqual(state);
  });

  it('when action is Not FETCH_EVENTS', () => {
    const action = { type: 'SOMETHING_ELSE', payload: {} };
    const result = eventsReducer({}, action);
    expect(result).toEqual({});
  });
});
