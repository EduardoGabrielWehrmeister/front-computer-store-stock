export function signInRequest(email, password, doRemember) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password, doRemember },
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
