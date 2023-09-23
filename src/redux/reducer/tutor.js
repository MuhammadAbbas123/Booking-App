import { ActionTypes } from '../constant/action-types';

const initialState = {
  tutor: [],
};

const TutorInfo = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_TUTOR_INFO:
      return {
        ...state,
        tutor: action.payload,
      };
    default:
      return state;
  }
};

export default TutorInfo;
