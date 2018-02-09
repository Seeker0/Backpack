import { setCurrentPouch } from './pouchActions';
var querystring = require('querystring');

export const GET_USER_POUCHES_REQUEST = 'GET_USER_POUCHES_REQUEST';
export const GET_USER_POUCHES_SUCCESS = 'GET_USER_POUCHES_SUCCESS';
export const GET_USER_POUCHES_FAILURE = 'GET_USER_POUCHES_FAILURE';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const UPDATE__PASSWORD_REQUEST = 'UPDATE_PASSWORD_REQUEST';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_ SUCCESS';
export const UPDATE_PASSWORD_FAILURE = 'UPDATE_PASSWORD_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST';
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS';
export const USER_DELETE_FAILURE = 'USER_DELETE_FAILURE';

export const CLEAR_ERROR = "CLEAR_ERROR";

let server =
  process.env.NODE_ENV === 'production'
    ? 'https://appbackpack.herokuapp.com'
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
        dispatch(setCurrentPouch({ _id: json[json.length - 1]._id }));
      })
      .catch(error => {
        dispatch(getUserPouchesFailure(error));
      });
  };
}

export function logout() {
  return dispatch => {
    fetch(`${server}/logout`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        dispatch(logoutSuccess());
      })
      .catch(error => {
        dispatch(logoutFailure(error));
      });
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}

export function logoutFailure(err) {
  return {
    type: LOGOUT_FAILURE,
    err
  };
}

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
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
          console.log(response.statusText);
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(user => {
        dispatch(getUserPouches(user));
        dispatch(loginSuccess(user));
        dispatch(setCurrentPouch({ _id: user.pouches[0] }));
      })
      .catch(e => {
        dispatch(loginFailure(e));
      });
  };
}

export function facebookLogin(data) {
  console.log(data);
  return dispatch => {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      mode: 'cors'
    };

    return fetch(
      `${server}/login/facebook?${querystring.stringify({
        access_token: data.accessToken
      })}`,
      requestOptions
    )
      .then(response => {
        console.log(response);
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(user => {
        dispatch(getUserPouches(user));
        dispatch(loginSuccess(user));
      })
      .catch(e => {
        dispatch(loginFailure(e));
      });
  };
}

export function googleLogin(data) {
  console.log(data);
  return dispatch => {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      mode: 'cors'
    };
    console.log(requestOptions);

    return fetch(
      `${server}/login/google?${querystring.stringify({
        access_token: data.accessToken
      })}`,
      requestOptions
    )
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(user => {
        dispatch(getUserPouches(user));
        dispatch(loginSuccess(user));
      })
      .catch(e => {
        dispatch(loginFailure(e));
      });
  };
}

export function loginFailure(err) {
  return {
    type: LOGIN_FAILURE,
    err
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data
  };
}

export function getUser() {
  return dispatch => {
    const requestOptions = {
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    };
    return fetch(`${server}/currentUser`, requestOptions)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      })
      .then(user => {
        dispatch(getUserPouches(user));
        dispatch(getUserSuccess(user));
      })
      .catch(err => {
        console.error(err);
        dispatch(getUserFailure(err));
      });
  };
}

export function getUserSuccess(data) {
  return {
    type: GET_USER_SUCCESS,
    data
  };
}

export function getUserFailure(err) {
  return {
    type: GET_USER_FAILURE,
    err
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
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        dispatch(userDeleteSuccess());
      })
      .catch(error => {
        dispatch(userDeleteFailure(error));
      });
  };
}

export function registerSuccess(data) {
  return {
    type: REGISTER_SUCCESS,
    data
  };
}

export function registerFailure(error) {
  return {
    type: REGISTER_FAILURE,
    error
  };
}

export function registerRequest() {
  return {
    type: REGISTER_REQUEST
  };
}

export function registerUser(data) {
  return dispatch => {
    let { username, password } = data;
    dispatch(registerRequest());

    fetch(`${server}/register`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(async response => {
        let json = await response.json();
        console.log(json);
        if (json.error) {
          throw new Error(`${json.error.message}`);
        }
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }


        return json;
      })
      .then(json => {
        dispatch(login({ username, password }));
      })
      .catch(error => {
        console.log(error);
        dispatch(registerFailure(error));
      });
  };
}

export function updateSuccess(data) {
  return {
    type: UPDATE_SUCCESS,
    data
  };
}

export function updateFailure(error) {
  return {
    type: UPDATE_FAILURE,
    error
  };
}

export function updateRequest() {
  return {
    type: UPDATE_REQUEST
  };
}

export function updateUser(data) {
  return dispatch => {
    dispatch(updateRequest());
    fetch(`${server}/users/${data._id}`, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        dispatch(updateSuccess(data));
      })
      .catch(error => {
        dispatch(updateFailure(error));
      });
  };
}

export function updatePasswordSuccess(data) {
  return {
    type: UPDATE_PASSWORD_SUCCESS,
    data
  };
}

export function updatePasswordFailure(error) {
  return {
    type: UPDATE_PASSWORD_FAILURE,
    error
  };
}

export function updatePasswordRequest() {
  return {
    type: UPDATE__PASSWORD_REQUEST
  };
}

export function updatePassword(data) {
  return dispatch => {
    dispatch(updateRequest());
    fetch(`${server}/users/${data._id}/password`, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        dispatch(updateSuccess(data));
      })
      .catch(error => {
        dispatch(updateFailure(error));
      });
  };
}

export function clearError() {
  return {
    type: CLEAR_ERROR
  };
}
