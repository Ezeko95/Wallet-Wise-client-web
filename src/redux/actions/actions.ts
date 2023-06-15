// Define your action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Define your action creators
interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

// Action creators
const increment = (): IncrementAction => ({
  type: INCREMENT,
});

const decrement = (): DecrementAction => ({
  type: DECREMENT,
});

// Union type of all action types
type AppAction = IncrementAction | DecrementAction;