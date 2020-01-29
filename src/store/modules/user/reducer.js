import produce from 'immer';
import Types from '../auth/types';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }

      case Types.SIGN_OUT: {
        draft.profile = null;
        break;
      }
      default:
        return state;
    }
  });
}
