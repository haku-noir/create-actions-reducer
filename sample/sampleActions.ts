import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const xxxActions = {
  sampleAction: actionCreator<any>('SAMPLE'),
};
