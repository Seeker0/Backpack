import { setCurrentPouch } from "./pouchActions";

export const NEW_ITEM_REQUEST = "NEW_ITEM_REQUEST";
export const NEW_ITEM_SUCCESS = "NEW_ITEM_SUCCESS";
export const NEW_ITEM_FAILURE = "NEW_ITEM_FAILURE";

export const DELETE_ITEM_REQUEST = "DELETE_ITEM_REQUEST";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const GET_ITEM_FAILURE = "GET_ITEM_FAILURE";
export const GET_ITEM_REQUEST = "GET_ITEM_REQUEST";

let server =
  process.env.NODE_ENV === "production"
    ? "https://app-Name.herokuapp.com"
    : "http://localhost:3001";

export function newItemSuccess(data) {
  return {
    type: NEW_ITEM_SUCCESS,
    data
  };
}

export function newItemFailure(error) {
  return {
    type: NEW_ITEM_FAILURE,
    error
  };
}

export function newItemRequest() {
  return {
    type: NEW_ITEM_REQUEST
  };
}

export function newItem(data) {
  let pouchId = data.pouchId;
  var myHeaders = new Headers();

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    dispatch(newItemRequest());

    fetch(`${server}/items/`, {
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
        dispatch(newItemSuccess(json));
        dispatch(setCurrentPouch({ pouchId }));
      })
      .catch(error => {
        dispatch(newItemFailure(error));
      });
  };
}

export function deleteItem(data) {
  return dispatch => {
    dispatch(deleteItemRequest());
    let { itemId, pouchId } = data;
    fetch(`${server}/items/${itemId}`, {
      method: "DELETE",
      body: JSON.stringify({ pouchId }),
      mode: "cors"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(deleteItemSuccess(json));
        dispatch(setCurrentPouch({ pouchId }));
      })
      .catch(error => {
        dispatch(deleteItemFailure(error));
      });
  };
}

export function deleteItemSuccess(data) {
  return {
    type: DELETE_ITEM_SUCCESS,
    data
  };
}

export function deleteItemFailure(error) {
  return {
    type: DELETE_ITEM_FAILURE,
    error
  };
}

export function deleteItemRequest() {
  return {
    type: DELETE_ITEM_REQUEST
  };
}

export function getItemRequest() {
  return {
    type: GET_ITEM_REQUEST
  };
}

export function getItemSuccess(data) {
  return {
    type: GET_ITEM_SUCCESS,
    data
  };
}

export function getItemFailure(error) {
  return {
    type: GET_ITEM_FAILURE,
    error
  };
}

export function getItem(data) {
  let itemId = data.itemId;
  return dispatch => {
    dispatch(getItemRequest());

    fetch(`${server}/items/${itemId}`, {
      mode: "cors"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        dispatch(getItemSuccess(data));
      })
      .catch(error => {
        dispatch(getItemFailure(error));
      });
  };
}
