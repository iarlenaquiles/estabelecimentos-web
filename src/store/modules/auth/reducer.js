import produce from 'immer';
import Types from './types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        break;
      }

      case Types.SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }

      case Types.SIGN_IN_FAILURE: {
        draft.loading = false;
        break;
      }

      case Types.SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
