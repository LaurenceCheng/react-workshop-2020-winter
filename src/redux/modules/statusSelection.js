// action type
export const STATUS_SELECT = "STATUS_SELECT";

const initialState = {
  status: "All",
};

export default function statusSelectionReducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case STATUS_SELECT:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
}

// action creator
export const selectStatus = (status) => ({
  type: STATUS_SELECT,
  status,
});
