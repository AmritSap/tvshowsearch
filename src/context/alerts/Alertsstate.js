import { useReducer } from "react";
import Alertscontext from "./aletrscontext";
import Alertreducer from "./Aletrsreducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(Alertreducer, initialState);
  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        type,
      },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };
  return (
    <Alertscontext.Provider value={{ alert: state, setAlert }}>
      {props.children}
    </Alertscontext.Provider>
  );
};

export default AlertState;
