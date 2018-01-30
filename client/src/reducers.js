import * as Actions from "./actions";

const initialState = {
  pouches: [],
  isFetching: false,
  error: null,
  currentpouch: undefined
};

export function backpack(state = initialState, action) {
  let index;
  switch (action.type) {
    case Actions.GET__SUCCESS:
      return {
        ...state,
        pouches: action.data,
        isFetching: false
      };
    case Actions.GET__REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.DELETE__POUCH:
      for (var i = 0; i < state.pouches.length; i++) {
        if (state.pouches[i].id === action.data) {
          index = i;
        }
        return {
          ...state,
          pouches: [
            ...state.pouches,
            state.pouches.slice(0, index).concat(state.pouches.slice(index + 1))
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
    case Actions.GET__POUCH:
      return {
        ...state,

        currentpouch: action.data,
        isFetching: false
      };
    case Actions.CREATE__POUCH:
      return {
        ...state,
        pouches: [...state.pouches, action.data],
        isFetching: false
      };

    case Actions.ADDTO__POUCH:
      for (var i = 0; i < state.pouches.length; i++) {
        if (state.pouches[i].id === action.data.id) {
          index = i;
        }
        return {
          ...state,
          pouches: [...state.pouches[index].links, action.data.links],
          isFetching: false
        };
      }

    case Actions.DELETEFROM__POUCH:
      for (var i = 0; i < state.pouches.length; i++) {
        if (state.pouches[i].id === action.data.id) {
          index = i;
        }
        return {
          ...state,
          pouches: [...state.pouches[index].links, action.data.links],
          isFetching: false
        };
      }
    default:
      return state;
  }
}
