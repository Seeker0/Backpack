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

    case Actions.DELETE__POCKET:
      let index;

      for (var i = 0; i < state.pockets.length; i++) {
        if (state.pockets[i].id === action.data) {
          index = i;
        }
        return {
          ...state,
          pockets: [
            ...state.pockets,
            state.pockets.slice(0, index).concat(state.pockets.slice(index + 1))
          ],
          isFetching: false,
          error: null
        };
      }

    case Actions.GET__FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case Actions.GET__POCKET:
      return {
        ...state,

        currentPocket: action.data,
        isFetching: false
      };
    case Actions.CREATE__POCKET:
      return {
        ...state,
        pockets: [...state.pockets, action.data],
        isFetching: false
      };

    case Actions.ADDTO__POCKET:
      let index;

      for (var i = 0; i < state.pockets.length; i++) {
        if (state.pockets[i].id === action.data.id) {
          index = i;
        }
        return {
          ...state,
          pockets: [...state.pockets[index].links, action.data.links],
          isFetching: false
        };
      }

    case Actions.DELETEFROM__POCKET:
      let index;

      for (var i = 0; i < state.pockets.length; i++) {
        if (state.pockets[i].id === action.data.id) {
          index = i;
        }
        return {
          ...state,
          pockets: [...state.pockets[index].links, action.data.links],
          isFetching: false
        };
      }
    default:
      return state;
  }
}
