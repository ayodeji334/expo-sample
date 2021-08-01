export const SELECT_SYMPTOM = "SELECT_SYMPTOM";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const LOG_OUT_SUCCESS = "LOG_OUt_SUCCESS";
export const LOG_OUT_ERROR = "LOG_OUT_ERROR";

const Reducer = (state, action) => {
  switch (action.type) {
    case SELECT_SYMPTOM:
        return {
            ...state,
            selectedSymptom: action.payload,
        }
    case AUTHENTICATION_SUCCESS: 
        return {
            ...state,
            auth: true,
            isLoadingAuthStatus: false,
            currentUser: action.payload
        }
    case AUTHENTICATION_ERROR: 
        return {
            ...state,
            auth: false,
            isLoadingAuthStatus: false
          }
    case LOG_OUT_SUCCESS:
        return {
            ...state,
            auth: false,
            currentUser: {}
          }
    default:
      return state;
  }
};

export default Reducer;