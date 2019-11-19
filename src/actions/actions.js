import axios from "axios";
import axiosWithAuth from "../auth/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const GET_START = "GET_START";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

export const GETUSERS_START = "GETUSERS_START";
export const GETUSERS_SUCCESS = "GETUSERS_SUCCESS";
export const GETUSERS_FAILURE = "GETUSERS_FAILURE";

export const GETUSER_START = "GETUSER_START";
export const GETUSER_SUCCESS = "GETUSER_SUCCESS";
export const GETUSER_FAILURE = "GETUSER_FAILURE";

export const UPDATEUSER_START = "UPDATEUSER_START";
export const UPDATEUSER_SUCCESS = "UPDATEUSER_SUCCESS";
export const UPDATEUSER_FAILURE = "UPDATEUSER_FAILURE";

export const DELETEUSER_START = "DELETEUSER_START";
export const DELETEUSER_SUCCESS = "DELETEUSER_SUCCESS";
export const DELETEUSER_FAILURE = "DELETEUSER_FAILURE";

export const GETTRIPS_START = "GETTRIPS_START";
export const GETTRIPS_SUCCESS = "GETTRIPS_SUCCESS";
export const GETTRIPS_FAILURE = "GETTRIPS_FAILURE";

export const GETTRIP_START = "GETTRIP_START";
export const GETTRIP_SUCCESS = "GETTRIP_SUCCESS";
export const GETTRIP_FAILURE = "GETTRIP_FAILURE";

export const POSTTRIP_START = "POSTTRIP_START";
export const POSTTRIP_SUCCESS = "POSTTRIP_SUCCESS";
export const POSTTRIP_FAILURE = "POSTTRIP_FAILURE";

export const DELETETRIP_START = "DELETETRIP_START";
export const DELETETRIP_SUCCESS = "DELETETRIP_SUCCESS";
export const DELETETRIP_FAILURE = "DELETETRIP_FAILURE";

export const GETTRIPSBYUID_START = "GETTRIPSBYUID_START";
export const GETTRIPSBYUID_SUCCESS = "GETTRIPSBYUID_SUCCESS";
export const GETTRIPSBYUID_FAILURE = "GETTRIPSBYUID_FAILURE";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post("", creds)

    .then(response => {
      console.log("REGISTER RESPONSE: ", response);
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch(error => {
      console.log("REGISTER ERROR: ", error);
      dispatch({ type: REGISTER_FAILURE });
    });
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("", creds)

    .then(response => {
      console.log("LOGIN RESPONSE: ", response);
      localStorage.setItem("token", response.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.user_id });
      return true;
    })
    .catch(erroror => {
      console.log("LOGIN ERROR: ", erroror);
      dispatch({ type: LOGIN_FAILURE, payload: erroror.response.message });
    });
};

export const getHome = () => dispatch => {
  dispatch({ type: GET_START });
  axiosWithAuth()
    .get("")

    .then(response => {
      console.log("GETHOME RESPONSE: ", response);
      dispatch({ type: GET_SUCCESS });
    })
    .catch(error => {
      console.log("GETHOME ERROR: ", error);
      dispatch({ type: GET_FAILURE });
    });
};

export const getUsers = () => dispatch => {
  dispatch({ type: GETUSERS_START });
  axiosWithAuth()
    .get("")

    .then(response => {
      console.log("GETUSERS RESPONSE: ", response);
      dispatch({ type: GETUSERS_SUCCESS, payload: response.data.AllUsers });
    })
    .catch(error => {
      console.log("GETUSERS ERROR: ", error);
      dispatch({ type: GETUSERS_FAILURE });
    });
};

export const getUser = user_id => dispatch => {
  dispatch({ type: GETUSER_START });
  axiosWithAuth()
    .get(``)
    .then(response => {
      console.log("GETUSER RESPONSE: ", response);
      dispatch({ type: GETUSER_SUCCESS, payload: response.data.user });
    })
    .catch(error => {
      console.log("GETUSER ERROR: ", error);
      dispatch({ type: GETUSER_FAILURE });
    });
};

export const updateUser = (id, userObj) => dispatch => {
  dispatch({ type: UPDATEUSER_START });
  axiosWithAuth()
    .patch(``, userObj)

    .then(response => {
      console.log("UPDATEUSER RESPONSE: ", response);
      dispatch({ type: UPDATEUSER_SUCCESS });
    })
    .catch(error => {
      console.log("UPDATEUSER ERROR: ", error);
      dispatch({ type: UPDATEUSER_FAILURE });
    });
};

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETEUSER_START });
  axiosWithAuth()
    .delete(``)

    .then(response => {
      console.log("DELETEUSER RESPONSE: ", response);
      dispatch({ type: DELETEUSER_SUCCESS });
    })
    .catch(error => {
      console.log("DELETEUSER ERROR: ", error);
      dispatch({ type: DELETEUSER_FAILURE });
    });
};

export const getTrips = () => dispatch => {
  dispatch({ type: GETTRIPS_START });
  axiosWithAuth()
    .get("")

    .then(response => {
      console.log("GETTRIPS RESPONSE: ", response);
      dispatch({ type: GETTRIPS_SUCCESS, payload: response.data.AllTrips });
    })
    .catch(error => {
      console.log("GETTRIPS ERROR: ", error);
      dispatch({ type: GETTRIPS_FAILURE });
    });
};

export const getTrip = trip_id => dispatch => {
  dispatch({ type: GETTRIP_START });
  axiosWithAuth()
    .get(``)

    .then(response => {
      console.log("GETTRIP RESPONSE: ", response);
      dispatch({ type: GETTRIP_SUCCESS, payload: response.data.Trip });
    })
    .catch(error => {
      console.log("GETTRIP ERROR: ", error);
      dispatch({ type: GETTRIP_FAILURE });
    });
};

export const getTripsByUserId = user_id => dispatch => {
  dispatch({ type: GETTRIPSBYUID_START });
  axiosWithAuth()
    .get(``)

    .then(response => {
      console.log("GETTRIPSBYUID RESPONSE: ", response);
      dispatch({ type: GETTRIPSBYUID_SUCCESS, payload: response.data.Trip });
      return true;
    })
    .catch(error => {
      console.log("GETTRIPSBYUID ERROR: ", error);
      dispatch({ type: GETTRIPSBYUID_FAILURE });
    });
};

export const postTrip = tripObj => dispatch => {
  dispatch({ type: POSTTRIP_START });
  axiosWithAuth()
    .post("s", tripObj)
    .then(response => {
      console.log("POSTTRIP RESPONSE: ", response);
      dispatch({ type: POSTTRIP_SUCCESS });
    })
    .catch(error => {
      console.log("POSTTRIP ERROR: ", error);
      dispatch({ type: POSTTRIP_FAILURE });
    });
};

export const deleteTrip = trip_id => dispatch => {
  dispatch({ type: DELETETRIP_START });
  axiosWithAuth()
    .delete(``)

    .then(response => {
      console.log("DELETETRIP RESPONSE: ", response);
      dispatch({ type: DELETETRIP_SUCCESS });
    })
    .catch(error => {
      console.log("DELETETRIP ERROR: ", error);
      dispatch({ type: DELETETRIP_FAILURE });
    });
};
