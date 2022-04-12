import axios from 'axios';

// globals
const dict = {};
const initialState = {};
const URL = 'https://kontests.net/api/v1/all';

// Actions
const FETCH_EVENTS = 'FETCH_EVENTS';

// Action Creators
export const getEvents = () => async (dispatch) => {
  const response = await axios.get(URL)
    .then((res) => res.data.map((item) => item));
  dict['All Events'] = response;
  response.forEach((el) => {
    if (el.site in dict) {
      dict[el.site].push(el);
    } else {
      dict[el.site] = [];
      dict[el.site].push(el);
    }
  });
  dispatch({
    type: FETCH_EVENTS,
    payload: dict,
  });
};

// Reducer
const eventsReducer = (state = initialState, action = {}) => {
  if (action.type === FETCH_EVENTS) {
    return { ...action.payload };
  }

  return state;
};

export default eventsReducer;
