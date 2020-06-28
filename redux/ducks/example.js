import { createDuck } from 'redux-duck'
import { createStructuredSelector } from 'reselect'

const duck = createDuck('app/example')

// Define initial state
const initialState = null

// Define constants
export const SET_EXAMPLE = duck.defineType('SET_EXAMPLE')

// Define actions
export const actions = ({
  set: duck.createAction(SET_EXAMPLE),
})

// Define selector
export const selector = createStructuredSelector({
  example: (state) => state.example,
})

// Define reducer
export default duck.createReducer({
  [SET_EXAMPLE]: (state, { payload }) => payload,
}, initialState)
