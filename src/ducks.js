import { combineReducers } from 'redux'

export const INIT = 'init';

function init(state = {}, action) {
  return state;
}

export default combineReducers({
  init,
});