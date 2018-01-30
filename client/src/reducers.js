import * as Actions from "./actions";

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
  error: null
};

export function currentUser(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_USER_POUCHES_REQUEST:
      //data is list of pouches {_id,name}
      return {
        ...state,
        isFetching: { ...state.isFetching, pouches: true }
      };
    case Actions.GET_USER_POUCHES_SUCCESS:
      let pouches = action.data;
      return {
        ...state,
        pouches,
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
      let pouch = action.data;
      return {
        ...state,
        currentPouch: pouch,
        isFetching: { ...state.isFetching, pouch: null },
        error: null
      };

    case Actions.GET_POUCH_FAILURE:
      let pouch = action.data;
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
      let pouch = action.data;
      return {
        ...state,
        currentPouch: pouch,
        isFetching: { ...state.isFetching, newPouch: null },
        error: null
      };

    case Actions.NEW_POUCH_FAILURE:
      let pouch = action.data;
      return {
        ...state,
        isFetching: { ...state.isFetching, newPouch: null },
        error: action.error
      };

    case Actions.SET_CURRENT_POUCH_SUCCESS:
      let pouchId = action.data.pouchId;
      let items = action.data.items;
      let currentPouch = state.pouches.find(pouch => pouch._id === pouchId);
      return {
        ...state,
        currentItems: items,
        currentPouch
      };

    case Actions.SET_CURRENT_POUCH_REQUEST:
      return {
        ...state,
        e,
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

    default:
      return state;
  }
}
