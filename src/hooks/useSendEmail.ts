//lib
import { useReducer, useCallback } from 'react';
import { init, send } from 'emailjs-com';

//reducer
import { reducer, initialState, State, Action } from '../reducer/reducer';

//types
import { ActionType } from '../reducer/reducer';

export const useSendEmail = () => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );

  const sendEmail = useCallback(() => {
    const user_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_USER_ID;
    const service_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_SERVICE_ID;
    const template_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_TEMPLATE_ID;
    if (
      user_id !== undefined &&
      service_id !== undefined &&
      template_id !== undefined
    ) {
      init(user_id);

      const template_param = {
        to_name: state.name,
        email: state.email,
        title: state.title,
        message: state.message,
      };

      send(service_id, template_id, template_param)
        .then(() => {
          console.log('success to send email');
          dispatch({ type: ActionType.RESET, payload: state });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [state]);

  const sendSelf = useCallback(() => {
    const user_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_USER_ID;
    const service_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_SERVICE_ID;
    const template_id = process.env.REACT_APP_PORTFOLIO_EMAILJS_TEMPLATE_ID;
    if (
      user_id !== undefined &&
      service_id !== undefined &&
      template_id !== undefined
    ) {
      init(user_id);

      const template_param = {
        to_name: state.name,
        email: 'qcsmm7@gmail.com',
        title: state.title,
        message: state.message,
      };

      send(service_id, template_id, template_param)
        .then(() => {
          console.log('success to send email');
          dispatch({ type: ActionType.RESET, payload: state });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [state]);
  return { state, sendEmail, sendSelf, dispatch };
};
