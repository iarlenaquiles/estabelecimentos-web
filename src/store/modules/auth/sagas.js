import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import Types from './types';

import api from '~/services/api';
import history from '~/services/history';

import { signFailure, signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'login', {
      email,
      password
    });

    const { user, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(user, token));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados');

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password
    });

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if(!payload) return;

  const { token } = payload.auth;

  if(token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest(Types.SIGN_IN_REQUEST, signIn),
  takeLatest(Types.SIGN_UP_REQUEST, signUp),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(Types.SIGN_OUT, signOut)
]);
