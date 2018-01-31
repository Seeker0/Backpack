import { getUserPouches } from "./userActions";

export const GET_POUCH_REQUEST = "GET_POUCH_REQUEST";
export const GET_POUCH_SUCCESS = "GET_POUCH_SUCCESS";
export const GET_POUCH_FAILURE = "GET_POUCH_FAILURE";

export const NEW_POUCH_REQUEST = "NEW_POUCH_REQUEST";
export const NEW_POUCH_SUCCESS = "NEW_POUCH_SUCCESS";
export const NEW_POUCH_FAILURE = "NEW_POUCH_FAILURE";

export const UPDATE_POUCH_REQUEST = "UPDATE_POUCH_REQUEST";
export const UPDATE_POUCH_SUCCESS = "UPDATE_POUCH_SUCCESS";
export const UPDATE_POUCH_FAILURE = "UPDATE_POUCH_FAILURE";

export const SET_CURRENT_POUCH_SUCCESS = "SET_CURRENT_POUCH_SUCCESS";
export const SET_CURRENT_POUCH_REQUEST = "SET_CURRENT_POUCH_REQUEST";
export const SET_CURRENT_POUCH_FAILURE = "SET_CURRENT_POUCH_FAILURE";

export const DELETE_POUCH_REQUEST = "DELETE_POUCH_REQUEST";
export const DELETE_POUCH_SUCCESS = "DELETE_POUCH_SUCCESS";
export const DELETE_POUCH_FAILURE = "DELETE_POUCH_FAILURE";

let server =
  process.env.NODE_ENV === "production"
    ? "https://app-Name.herokuapp.com"
    : "http://localhost:3001";

export function getPouchSuccess(data) {
  return {
    type: GET_POUCH_SUCCESS,
    data
  };
}

export function getPouchFailure(error) {
  return {
    type: GET_POUCH_FAILURE,
    error
  };
}

export function getPouchRequest() {
  return {
    type: GET_POUCH_REQUEST
  };
}

export function getPouch(id) {
  return dispatch => {
    dispatch(getPouchRequest());

    fetch(`/pouches/${id}`, { mode: "cors" })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getPouchSuccess(json));
      })
      .catch(error => {
        dispatch(getPouchFailure(error));
      });
  };
}

export function newPouch(data) {
  var myHeaders = new Headers();

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    dispatch(newPouchRequest());

    fetch(`${server}/pouches`, {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(newPouchSuccess(json));
        dispatch(getUserPouches());
      })
      .catch(error => {
        dispatch(newPouchFailure(error));
      });
  };
}

export function newPouchSuccess(data) {
  return {
    type: NEW_POUCH_SUCCESS,
    data
  };
}

export function newPouchFailure(error) {
  return {
    type: NEW_POUCH_FAILURE,
    error
  };
}

export function newPouchRequest() {
  return {
    type: NEW_POUCH_REQUEST
  };
}

export function updatePouchSuccess(data) {
  return {
    type: UPDATE_POUCH_SUCCESS,
    data
  };
}

export function updatePouchFailure(error) {
  return {
    type: UPDATE_POUCH_FAILURE,
    error
  };
}

export function updatePouchRequest() {
  return {
    type: UPDATE_POUCH_REQUEST
  };
}

export function updatePouch(data) {
  var myHeaders = new Headers();
  let { name, userId, itemIds } = data;

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    dispatch(updatePouchRequest());

    fetch(`${server}/pouches`, {
      method: "PUT",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
      body: JSON.stringify({ name, userId, itemIds })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(updatePouchSuccess(json));
        dispatch(getUserPouches());
        dispatch(setCurrentPouch({ pouchId: json._id }));
      })
      .catch(error => {
        dispatch(updatePouchFailure(error));
      });
  };
}

export function setCurrentPouch(data) {
  let pouchId = data.pouchId;
  return dispatch => {
    dispatch(setCurrentPouchRequest());

    fetch(`${server}/items/list/${pouchId}`, {
      mode: "cors"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        //data is a list of items
        //pouchId
        let data = { items: json, pouchId };
        dispatch(setCurrentPouchSuccess(data));
      })
      .catch(error => {
        dispatch(setCurrentPouchFailure(error));
      });
  };
}

export function setCurrentPouchRequest() {
  return {
    type: SET_CURRENT_POUCH_REQUEST
  };
}

export function setCurrentPouchSuccess(data) {
  return {
    type: SET_CURRENT_POUCH_SUCCESS,
    data
  };
}

export function setCurrentPouchFailure(error) {
  return {
    type: SET_CURRENT_POUCH_FAILURE,
    error
  };
}

export function deletePouch(data) {
  const id = data.id;
  return dispatch => {
    dispatch(deletePouchRequest());

    fetch(`${server}/pouches/${id}`, {
      method: "DELETE",
      mode: "cors"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(deletePouchSuccess(json));
        dispatch(getUserPouches());
      })
      .catch(error => {
        dispatch(deletePouchFailure(error));
      });
  };
}

export function deletePouchSuccess(data) {
  return {
    type: DELETE_POUCH_SUCCESS,
    data
  };
}

export function deletePouchRequest(data) {
  return {
    type: DELETE_POUCH_REQUEST,
    data
  };
}

export function deletePouchFailure(error) {
  return {
    type: DELETE_POUCH_FAILURE,
    error
  };
}
