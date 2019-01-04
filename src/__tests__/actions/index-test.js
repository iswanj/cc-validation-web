import * as actions from '../../actions';

describe('app actions', () => {
  it('should create an action to set app state', () => {
    const state = {
      testState: 'test'
    };
    const expectedAction = {
      type: '@@app/SET_STATE',
      payload: state,
      meta: undefined
    };
    expect(actions.setState(state)).toEqual(expectedAction);
  });

  it('should create an action to set form field changes to state', () => {
    const state = {
      form: 'test',
      name: 'firstName',
      value: 'iswan'
    };
    const expectedAction = {
      type: '@@app/ON_FIELD_CHANGE',
      payload: state,
      meta: undefined
    };
    expect(actions.onFieldChange(state)).toEqual(expectedAction);
  });

  it('should create an action to rest form data', () => {
    const expectedAction = {
      type: '@@app/RESET_FORM',
      payload: 'payment',
      meta: undefined
    };
    expect(actions.resetForm('payment')).toEqual(expectedAction);
  });
});
