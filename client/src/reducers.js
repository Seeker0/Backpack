import Actions from './actions';

const initialState = {
  pouches: [],
  currentPouch: null,
  currentItems: [],
  isFetching: {
    user: null,
    pouch: null,
    pouches: null,
    items: null,
    item: null,
    newPouch: null
  },
  error: null,
  verifyError: null,
  user: null,
  authorized: false,
  authenticated: false
};

export function currentUser(state = initialState, action) {
  let pouch;
  switch (action.type) {
    case Actions.GET_USER_POUCHES_REQUEST:
      return {
        ...state,
        isFetching: { ...state.isFetching, pouches: true }
      };
    case Actions.GET_USER_POUCHES_SUCCESS:
      let pouches = action.data;
      let currentPouch;
      currentPouch = pouches[0];
      return {
        ...state,
        pouches,
        currentPouch,
        isFetching: { ...state.isFetching, pouches: null },
        error: null
      };

    case Actions.GET_USER_POUCHES_FAILURE:
      return {
        ...state,
        isFetching: { ...state.isFetching, pouches: null },
        error: action.error
      };

    case Actions.GET_POUCH_REQUEST:
      return {
        ...state,
        isFetching: { ...state.isFetching, pouch: true }
      };

    case Actions.GET_POUCH_SUCCESS:
      pouch = action.data;
      return {
        ...state,
        currentPouch: pouch,
        isFetching: { ...state.isFetching, pouch: null },
        error: null
      };

    case Actions.GET_POUCH_FAILURE:
      pouch = action.data;
      return {
        ...state,
        isFetching: { ...state.isFetching, pouch: null },
        error: action.error
      };

    case Actions.NEW_POUCH_REQUEST:
      return {
        ...state,
        isFetching: { ...state.isFetching, newPouch: true }
      };

    case Actions.NEW_POUCH_SUCCESS:
      pouch = action.data;
      return {
        ...state,
        currentPouch: pouch,
        isFetching: { ...state.isFetching, newPouch: null },
        error: null
      };

    case Actions.NEW_POUCH_FAILURE:
      pouch = action.data;
      return {
        ...state,
        isFetching: { ...state.isFetching, newPouch: null },
        error: action.error
      };

    case Actions.SET_CURRENT_POUCH_SUCCESS:
      let pouchId = action.data.pouchId;
      let items = action.data.items;
      currentPouch = state.pouches.find(pouch => pouch._id === pouchId);
      return {
        ...state,
        currentItems: items,
        currentPouch
      };

    case Actions.SET_CURRENT_POUCH_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: { ...state.isFetching, items: true }
      };

    case Actions.SET_CURRENT_POUCH_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: { ...state.isFetching, items: null }
      };

    case Actions.UPDATE_POUCH_REQUEST:
      return {
        ...state,
        isFetching: { ...state.isFetching, pouch: true },
        error: null
      };

    case Actions.UPDATE_POUCH_SUCCESS:
      return {
        ...state,
        isFetching: { ...state.isFetching, pouch: false },
        error: null
      };

    case Actions.UPDATE_POUCH_FAILURE:
      return {
        ...state,
        isFetching: { ...state.isFetching, pouch: false },
        error: action.error
      };

    case Actions.DELETE_POUCH_REQUEST:
      return {
        ...state,
        isFetching: { ...state.isFetching, pouch: true },
        error: null
      };

    case Actions.DELETE_POUCH_SUCCESS:
      return {
        ...state,
        currentPouch: state.pouches[0],
        isFetching: { ...state.isFetching, pouch: false },
        error: null
      };

    case Actions.DELETE_POUCH_FAILURE:
      return {
        ...state,
        isFetching: { ...state.isFetching, pouch: false },
        error: action.error
      };

    case Actions.NEW_ITEM_REQUEST:
      return {
        ...state,
        isFetching: { ...state.isFetching, item: true },
        error: null
      };

    case Actions.NEW_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: { ...state.isFetching, item: false },
        error: null
      };

    case Actions.NEW_ITEM_FAILURE:
      return {
        ...state,
        isFetching: { ...state.isFetching, item: false },
        error: action.error
      };

    case Actions.DELETE_ITEM_REQUEST:
      return {
        ...state,
        isFetching: { ...state.isFetching, item: true },
        error: null
      };

    case Actions.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: { ...state.isFetching, item: false },
        error: null
      };

    case Actions.DELETE_ITEM_FAILURE:
      return {
        ...state,
        isFetching: { ...state.isFetching, item: false },
        error: action.error
      };

    case Actions.SEARCH_REQUEST:
      return {
        ...state,
        isFetching: { ...state.isFetching, items: true },
        error: null
      };

    case Actions.SEARCH_SUCCESS:
      items = action.data;
      return {
        ...state,
        currentItems: items,
        currentPouch: null,
        isFetching: { ...state.isFetching, items: null },
        error: null
      };

    case Actions.SEARCH_FAILURE:
      return {
        ...state,
        isFetching: { ...state.isFetching, items: null },
        error: action.error
      };

    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data,
        authorized: true,
        authenticated: true
      };

    case Actions.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
        authorized: true,
        authenticated: true
      };

    case Actions.LOGOUT_SUCCESS:
      return {
        ...initialState,
        authenticated: true
      };

    case Actions.LOGIN_FAILURE:
      return {
        ...initialState,
        authenticated: true
      };

    case Actions.GET_USER_FAILURE:
      return {
        ...initialState,
        authenticated: true
      };

    case Actions.UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.data,
        verifyError: null
      };
    case Actions.UPDATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        verifyError: action.error
      };
    case Actions.UPDATE_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case Actions.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.data,
        verifyError: null
      };
    case Actions.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        isFetching: false,
        verifyError: action.error
      };
    case Actions.UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case Actions.USER_DELETE_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case Actions.USER_DELETE_SUCCESS:
      return {
        ...initialState,
        isFetching: false,
        error: null,
        verifyError: null,
        authenticated: true
      };

    case Actions.USER_DELETE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        verifyError: action.error
      };

    case Actions.REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        authenticated: true,
        error: action.error
      };

    case Actions.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
}
