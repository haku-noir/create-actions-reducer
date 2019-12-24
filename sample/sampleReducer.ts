import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { xxxActions } from 'actions/xxxActions';

export interface XXXState {
  sample: any;
}

const initialState: XXXState = {
  sample: Object,
};

export const xxxReducer = reducerWithInitialState(initialState)
  .case(xxxActions.sampleAction, (state: XXXState, payload: any): XXXState => ({
    ...state,
    sample: payload,
  }));
