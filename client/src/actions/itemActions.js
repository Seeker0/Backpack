import { setCurrentPouch } from "./pouchActions";
import { getUser } from "./userActions";

export const NEW_ITEM_REQUEST = "NEW_ITEM_REQUEST";
export const NEW_ITEM_SUCCESS = "NEW_ITEM_SUCCESS";
export const NEW_ITEM_FAILURE = "NEW_ITEM_FAILURE";

export const DELETE_ITEM_BY_ID_SUCCESS = "DELETE_ITEM_BY_ID_SUCCESS";
export const DELETE_ITEM_BY_ID_FAILURE = "DELETE_ITEM_BY_ID_FAILURE";
export const DELETE_ITEM_BY_ID_REQUEST = "DELETE_ITEM_BY_ID_REQUEST";

export const DELETE_ITEM_REQUEST = "DELETE_ITEM_REQUEST";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const GET_ITEM_FAILURE = "GET_ITEM_FAILURE";
export const GET_ITEM_REQUEST = "GET_ITEM_REQUEST";

export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const SEARCH_REQUEST = "SEARCH_REQUEST";

const querystring = require("querystring");

let server =
  process.env.NODE_ENV === "production"
    ? "https://app-Name.herokuapp.com"
    : "http://localhost:3000";

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
  /*
  data = {pouchId, link, name, ownerId}
  */
  let pouchId = data.pouchId;
  var myHeaders = new Headers();
  console.log("This is the data being put on drop:", data);

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    dispatch(newItemRequest());

    fetch(`${server}/items`, {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
      body: JSON.stringify(data),
      credentials: "same-origin"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(newItemSuccess(json));
        if (pouchId) {
          dispatch(setCurrentPouch({ _id: pouchId }));
        } else {
          dispatch(getUser());
        }
      })
      .catch(error => {
        dispatch(newItemFailure(error));
      });
  };
}

export function deleteItem(data) {
  return dispatch => {
    dispatch(deleteItemRequest());
    let { id, pouchId, ownerId } = data;
    fetch(`${server}/items/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ pouchId, ownerId }),
      mode: "cors",
      credentials: "same-origin"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(deleteItemSuccess(json));
        dispatch(setCurrentPouch({ _id: pouchId }));
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

export function deleteItemByIdRequest() {
  return {
    type: DELETE_ITEM_BY_ID_REQUEST
  };
}

export function deleteItemByIdSuccess(id) {
  return {
    type: DELETE_ITEM_BY_ID_SUCCESS,
    id
  };
}

export function deleteItemByIdFailure(error) {
  return {
    type: DELETE_ITEM_BY_ID_FAILURE,
    error
  };
}

export function deleteItemById(id) {
  console.log("Entered deleteItemById action:", id);
  return dispatch => {
    dispatch(deleteItemByIdRequest());
    fetch(`${server}/items/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: {},
      mode: "cors",
      credentials: "same-origin"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(deleteItemByIdSuccess(json));
        //dispatch(setCurrentPouch({ _id: pouchId }));
      })
      .catch(error => {
        dispatch(deleteItemByIdFailure(error));
      });
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
      mode: "cors",
      credentials: "same-origin"
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

export function searchRequest() {
  return {
    type: SEARCH_REQUEST
  };
}

export function searchSuccess(data) {
  return {
    type: SEARCH_SUCCESS,
    data
  };
}

export function searchFailure(error) {
  return {
    type: SEARCH_FAILURE,
    error
  };
}

export function search(data) {
  let searchData = { name: data };
  let query = querystring.stringify(searchData);
  return dispatch => {
    dispatch(searchRequest());

    fetch(`${server}/items/search/?${query}`, {
      mode: "cors",
      credentials: "same-origin",
      headers: { "content-type": "application/json" }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(response => {
        dispatch(searchSuccess(response));
      })
      .catch(error => {
        dispatch(searchFailure(error));
      });
  };
}
