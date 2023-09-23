import { ActionTypes } from '../constant/action-types';

export const setTutor = (TutorDetail) => {
  console.log('TutorDetail', TutorDetail);
  return {
    type: ActionTypes.SET_TUTOR_INFO,
    payload: TutorDetail,
  };
};
