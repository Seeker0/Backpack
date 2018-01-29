import * as Actions from "./actions";

const initialState = {
  pockets: [],
  isFetching: false,
  error: null,
  currentPocket: undefined
};

export function Pockets(state = initialState, action) {
  switch (action.type) {
    case Actions.GET__SUCCESS:
      return {
        ...state,
        pockets: action.data,
        isFetching: false
      };
    case Actions.GET__REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
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
