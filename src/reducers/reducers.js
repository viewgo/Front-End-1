import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_START,
  GET_SUCCESS,
  GET_FAILURE,
  GETUSERS_START,
  GETUSERS_SUCCESS,
  GETUSERS_FAILURE,
  GETUSER_START,
  GETUSER_SUCCESS,
  GETUSER_FAILURE,
  UPDATEUSER_START,
  UPDATEUSER_SUCCESS,
  UPDATEUSER_FAILURE,
  DELETEUSER_START,
  DELETEUSER_SUCCESS,
  DELETEUSER_FAILURE,
  GETTRIPS_START,
  GETTRIPS_SUCCESS,
  GETTRIPS_FAILURE,
  GETFEATUREDTRIPS_START,
  GETFEATUREDTRIPS_SUCCESS,
  GETFEATUREDTRIPS_FAILURE,
  GETPOPULARTRIPS_START,
  GETPOPULARTRIPS_SUCCESS,
  GETPOPULARTRIPS_FAILURE,
  POSTTRIP_START,
  POSTTRIP_SUCCESS,
  POSTTRIP_FAILURE,
  EDITTRIP_START,
  EDITTRIP_SUCCESS,
  EDITTRIP_FAILURE,
  GETMYTRIPS_START,
  GETMYTRIPS_SUCCESS,
  GETMYTRIPS_FAILURE,
  DELETETRIP_START,
  DELETETRIP_SUCCESS,
  DELETETRIP_FAILURE
} from "../actions/actions";

let initialState = {
  allTrips: [{ id: 1, tourname: "placeholder" }],
  myTrips: [],
  featuredTrips: [],
  popularTrips: [],
  error: null,
  registering: false,
  registered: false,
  loggingIn: false,
  loggedIn: false,
  user_id: null,
  changeTrigger: false,
  email: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //*******************************************************
    //payload: none
    case REGISTER_START:
      return {
        ...state,
        registering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        registered: true
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        registered: false
      };

    //*******************************************************
    //payload: none
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("email", action.payload);
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        email: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false
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
        ...state,
        guides: action.payload
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
        ...state,
        allTrips: action.payload
      };
    case GETTRIPS_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: trip by ID passed in
    case GETFEATUREDTRIPS_START:
      return {
        ...state
      };
    case GETFEATUREDTRIPS_SUCCESS:
      return {
        ...state,
        featuredTrips: [...state.featuredTrips, action.payload]
      };
    case GETFEATUREDTRIPS_FAILURE:
      return {
        ...state
      };

      //*******************************************************
    //payload: trip by ID passed in
    case GETPOPULARTRIPS_START:
      return {
        ...state
      };
    case GETPOPULARTRIPS_SUCCESS:
      return {
        ...state,
        popularTrips: [...state.popularTrips, action.payload]
      };
    case GETPOPULARTRIPS_FAILURE:
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
        ...state,
        changeTrigger: !state.changeTrigger
      };
    case POSTTRIP_FAILURE:
      return {
        ...state
      };
    //*******************************************************
    //payload: none
    case EDITTRIP_START:
      return {
        ...state
      };
    case EDITTRIP_SUCCESS:
      return {
        ...state,
        changeTrigger: !state.changeTrigger
      };
    case EDITTRIP_FAILURE:
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
        ...state,
        changeTrigger: !state.changeTrigger
      };
    case DELETETRIP_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    //payload: all trips by guide
    case GETMYTRIPS_START:
      return {
        ...state
      };
    case GETMYTRIPS_SUCCESS:
      return {
        ...state,
        myTrips: action.payload
      };
    case GETMYTRIPS_FAILURE:
      return {
        ...state
      };

    //*******************************************************
    default:
      return state;
  }
}
