import {
  LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
  REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
  GETUSERS_START, GETUSERS_SUCCESS, GETUSERS_FAILURE,
  GETUSER_START, GETUSER_SUCCESS, GETUSER_FAILURE,
  UPDATEUSER_START, UPDATEUSER_SUCCESS, UPDATEUSER_FAILURE,
  DELETEUSER_START, DELETEUSER_SUCCESS, DELETEUSER_FAILURE,
  GETTRIPS_START, GETTRIPS_SUCCESS, GETTRIPS_FAILURE,
  GETTRIP_START, GETTRIP_SUCCESS, GETTRIP_FAILURE,
  POSTTRIP_START, POSTTRIP_SUCCESS, POSTTRIP_FAILURE,
  GETTRIPSBYUID_START, GETTRIPSBYUID_SUCCESS, GETTRIPSBYUID_FAILURE,
  DELETETRIP_START, DELETETRIP_SUCCESS, DELETETRIP_FAILURE
} from "../actions/actions";

let initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    //*******************************************************
    //payload: none
    case REGISTER_START:
      return {
        ...state
      };
    case REGISTER_SUCCESS:
      return {
        ...state
      };
    case REGISTER_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: none
    case LOGIN_START:
      return {
        ...state
      };
    case LOGIN_SUCCESS:
      return {
        ...state
      };
    case LOGIN_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: none
    case GET_START:
      return {
        ...state
      };
    case GET_SUCCESS:
      return {
        ...state
      };
    case GET_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: all users
    case GETUSERS_START:
      return {
        ...state
      };
    case GETUSERS_SUCCESS:
      return {
        ...state
      };
    case GETUSERS_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: user information
    case GETUSER_START:
      return {
        ...state
      };
    case GETUSER_SUCCESS:
      return {
        ...state
      };
    case GETUSER_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: none
    case UPDATEUSER_START:
      return {
        ...state
      };
    case UPDATEUSER_SUCCESS:
      return {
        ...state
      };
    case UPDATEUSER_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: none
    case DELETEUSER_START:
      return {
        ...state
      };
    case DELETEUSER_SUCCESS:
      return {
        ...state
      };
    case DELETEUSER_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: all trips in database
    case GETTRIPS_START:
      return {
        ...state
      };
    case GETTRIPS_SUCCESS:
      return {
        ...state
      };
    case GETTRIPS_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: trip by ID passed in
    case GETTRIP_START:
      return {
        ...state
      };
    case GETTRIP_SUCCESS:
      return {
        ...state
      };
    case GETTRIP_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: none
    case POSTTRIP_START:
      return {
        ...state
      };
    case POSTTRIP_SUCCESS:
      return {
        ...state
      };
    case POSTTRIP_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: none
    case DELETETRIP_START:
      return {
        ...state
      };
    case DELETETRIP_SUCCESS:
      return {
        ...state
      };
    case DELETETRIP_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: all trips by user_id passed in
    case GETTRIPSBYUID_START:
      return {
        ...state
      };
    case GETTRIPSBYUID_SUCCESS:
      return {
        ...state
      };
    case GETTRIPSBYUID_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    default:
      return state;
  }
}
