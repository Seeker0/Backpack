export const GET__REQUEST = "GET__REQUEST";
export const GET__SUCCESS = "GET__SUCCESS";
export const GET__FAILURE = "GET__FAILURE";
export const GET__POUCH = "GET__POUCH";
export const CREATE__POUCH = "CREATE__POUCH";
export const DELETE__POUCH = "DELETE__POUCH";
export const ADDTO__POUCH = "ADDTO__POUCH";
export const DELETEFROM__POUCH = "DELETEFROM__POUCH";

export function getRequest() {
  return {
    type: GET__REQUEST
  };
}

export function deletePouch(id) {
  return {
    type: DELETE__POUCH,
    id
  };
}
export function createPouch(data) {
  return {
    type: CREATE__POUCH,
    data
  };
}
export function getSuccess(data) {
  return {
    type: GET__SUCCESS,
    data
  };
}

export function getFailure(error) {
  return {
    type: GET__FAILURE,
    error
  };
}

export function getPouch(data) {
  return {
    type: GET__POUCH,
    data
  };
}

export function addToPouch(data) {
  return {
    type: ADDTO__POUCH,
    data
  };
}

export function deleteFromPouch(data) {
  return {
    type: DELETEFROM__POUCH,
    data
  };
}

export function getOnePouch(id) {
  return dispatch => {
    dispatch(getRequest());

    fetch(`/pouch/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getPouch(json));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}

export function onSubmitAdd(e) {
  e.preventDefault();
  var myHeaders = new Headers();
  const id = e.target.elements.id.value;
  const data = e.target.elements.data.value;

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    dispatch(getRequest());

    fetch(`/update/${id}`, {
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
        dispatch(addToPouch(json));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}

export function onSubmit(e) {
  e.preventDefault();
  const id = e.target.value;

  return dispatch => {
    dispatch(getRequest());

    fetch(`/pouch/delete/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getSuccess(json));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}

export function onSubmitDelete(e) {
  e.preventDefault();
  const id = e.target.elements.id.value;
  const linkId = e.target.elements.linkid.value;
  return dispatch => {
    dispatch(getRequest());

    fetch(`/pouch/delete/${id}/${linkId}`, {
      method: "DELETE",
      body: JSON.stringify(id)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(deleteFromPouch(json));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}
export function getInitialPouches() {
  return dispatch => {
    dispatch(getRequest());

    fetch("/api/pouches")
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getSuccess(json));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}

export function createAPouch(data) {
  var myHeaders = new Headers();

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    dispatch(getRequest());

    fetch("/newPouch", {
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
        dispatch(getOnePouch(json.id));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}
