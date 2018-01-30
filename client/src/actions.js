
export const GET_USER_POUCHES_REQUEST = "GET_USER_POUCHES_REQUEST";
export const GET_USER_POUCHES_SUCCESS = "GET_USER_POUCHES_SUCCESS";
export const GET_USER_POUCHES_FAILURE = "GET_USER_POUCHES_FAILURE";



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

export const NEW_ITEM_REQUEST = "NEW_ITEM_REQUEST";
export const NEW_ITEM_SUCCESS = "NEW_ITEM_SUCCESS";
export const NEW_ITEM_FAILURE = "NEW_ITEM_FAILURE";

export const DELETE_ITEM_REQUEST = "DELETE_ITEM_REQUEST";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const USER_DELETE_REQUEST = "USER_DELETE_REQUEST";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_FAILURE = "USER_DELETE_FAILURE";

export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const GET_ITEM_FAILURE = "GET_ITEM_FAILURE";
export const GET_ITEM_REQUEST = "GET_ITEM_REQUEST";

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

export function deletePouchSuccess(data) {
  return {
    type: DELETE_POUCH_SUCCESS,
    data
  };
}

export function deletePouchRequest() {
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

export function getPouch(id) {
  return dispatch => {
    dispatch(getPouchRequest());

    fetch(`/pouches/${id}`)

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

export function newItem(data) {
  let item = data.item;
  let pouchId = data.pouchId;
  var myHeaders = new Headers();

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    dispatch(newItemRequest());

    fetch("/items/", {
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
        dispatch(setCurrentPouch({pouchId}))

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
    fetch(`/items/${itemId}`, {

      method: "DELETE",
      body: JSON.stringify({ pouchId })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(deleteItemSuccess(json));
        dispatch(setCurrentPouch({pouchId})
      })
      .catch(error => {
        dispatch(deleteItemFailure(error));
      });
  };
}

export function deletePouch(data) {
  const id = data.id;
  return dispatch => {
    dispatch(deletePouchRequest());


    fetch(`/pouches/${id}`, {
      method: "DELETE"

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

export function getUserPouches() {

  return dispatch => {
    dispatch(getUserPouchesRequest());


    fetch("/pouches/currentUser")

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


export function newPouch(data) {

  var myHeaders = new Headers();

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    dispatch(newPouchRequest());


    fetch("/pouches", {

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
        dispatch(getFailure(error));
      });
  };
}

export function updatePouch(data) {
  var myHeaders = new Headers();
  let { name, userId, itemIds } = data;

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    dispatch(updatePouchRequest());

    fetch("/pouches", {
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
        dispatch(setCurrentPouch({pouchId:json._id}));
      })
      .catch(error => {
        dispatch(updateFailure(error));
      });
  };
}

export function deleteUser(data) {
  return dispatch => {
    dispatch(userDeleteRequest());

    fetch(`/users/${data._id}`, {
      method: "DELETE",
      mode: "cors"
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

export function setCurrentPouch(data) {
  let pouchId = data.pouchId;
  return dispatch => {
    dispatch(setCurrentPouchRequest());

    fetch(`/items/list/${pouchId}`, {
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

export function getItem(data) {
  let itemId = data.itemId;
  return dispatch => {
    dispatch(getItemRequest());

    fetch(`/items/${itemId}`, {
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

/*export function logout(){
return dispatch => {
    dispatch(logoutRequest());

    fetch(`/logout/${data._id}`, {
      method: "DELETE",
      mode: "cors"
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


} */
/*function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('/users/authenticate', requestOptions)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {
        
            if (user && user.token) {
              
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}*/
