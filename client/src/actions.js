export const GET__REQUEST = "GET__REQUEST";
export const GET__SUCCESS = "GET__SUCCESS";
export const GET__FAILURE = "GET__FAILURE";
export const GET__POCKET = "GET__POCKET";
export const CREATE__POCKET = "CREATE__POCKET";
export const DELETE__POCKET = "DELETE__POCKET";
export const ADDTO__POCKET = "ADDTO__POCKET";
export const DELETEFROM__POCKET = "DELETEFROM__POCKET";

export function getRequest() {
  return {
    type: GET__REQUEST
  };
}

export function deletePocket(id) {
  return {
    type: DELETE__POCKET,
    id
  };
}
export function createPocket(data) {
  return {
    type: CREATE__POCKET,
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

export function getPocket(data) {
  return {
    type: GET__POCKET,
    data
  };
}

export function addToPocket(data) {
  return {
    type: ADDTO__POCKET,
    data
  };
}

export function deleteFromPocket(data) {
  return {
    type: DELETEFROM__POCKET,
    data
  };
}

export function getOnePocket(id) {
  return dispatch => {
    dispatch(getRequest());

    fetch(`/pocket/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getPocket(json));
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
        dispatch(addToPocket(json));
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

    fetch(`/pocket/delete/${id}`, {
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

    fetch(`/pocket/delete/${id}/${linkId}`, {
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
        dispatch(deleteFromPocket(json));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}
export function getInitialPockets() {
  return dispatch => {
    dispatch(getRequest());

    fetch("/api/pockets")
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

export function createAPocket(data) {
  var myHeaders = new Headers();

  myHeaders.append("content-type", "application/json");
  return dispatch => {
    dispatch(getRequest());

    fetch("/newpocket", {
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
        dispatch(getOnePocket(json.id));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}
