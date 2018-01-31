export const GET_USER_POUCHES_REQUEST = 'GET_USER_POUCHES_REQUEST';
export const GET_USER_POUCHES_SUCCESS = 'GET_USER_POUCHES_SUCCESS';
export const GET_USER_POUCHES_FAILURE = 'GET_USER_POUCHES_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST';
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS';
export const USER_DELETE_FAILURE = 'USER_DELETE_FAILURE';

let server =
  process.env.NODE_ENV === 'production'
    ? 'https://app-Name.herokuapp.com'
    : 'http://localhost:3000';

export function getUserPouchesSuccess(data) {
  return {
    type: GET_USER_POUCHES_SUCCESS,
    data
  };
}

export function getUserPouchesFailure(error) {
  return {
    type: GET_USER_POUCHES_FAILURE,
    error
  };
}

export function getUserPouchesRequest() {
  return {
    type: GET_USER_POUCHES_REQUEST
  };
}

export function getUserPouches(user) {
  return dispatch => {
    dispatch(getUserPouchesRequest());
    console.log(user);
    fetch(`${server}/pouches/${user._id}`, {
      mode: 'cors',
      credentials: 'same-origin'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getUserPouchesSuccess(json));
      })
      .catch(error => {
        dispatch(getUserPouchesFailure(error));
      });
  };
}

export function logout(data) {
  return dispatch => {
    fetch(`${server}/logout/${data._id}`, {
      method: 'DELETE',
      mode: 'cors'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        dispatch(userDeleteSuccess());
        dispatch(logout());
      })
      .catch(error => {
        dispatch(userDeleteFailure(error));
      });
  };
}

export function login(user) {
  return dispatch => {
    const requestOptions = {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
      mode: 'cors'
    };

    return fetch(`${server}/login`, requestOptions)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(user => {
        console.log(user);
        dispatch(getUserPouches(user));
      })
      .catch(console.error);
  };
}

export function userDeleteRequest() {
  return {
    type: USER_DELETE_REQUEST
  };
}

export function userDeleteSuccess() {
  return {
    type: USER_DELETE_SUCCESS
  };
}

export function userDeleteFailure() {
  return {
    type: USER_DELETE_FAILURE
  };
}

export function deleteUser(data) {
  return dispatch => {
    dispatch(userDeleteRequest());

    fetch(`${server}/users/${data._id}`, {
      method: 'DELETE',
      mode: 'cors'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        dispatch(userDeleteSuccess());
        dispatch(logout());
      })
      .catch(error => {
        dispatch(userDeleteFailure(error));
      });
  };
}
