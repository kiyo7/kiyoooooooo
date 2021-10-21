//lib
import { useReducer, useState, useCallback } from 'react';
import { init, send } from 'emailjs-com';

//reducer
import { reducer, initialState } from '../reducer/reducer';

export const useSendEmail = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [checking, setChecking] = useState(false);

  const sendEmail = useCallback(() => {
    // setChecking(true);
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
          dispatch({ type: 'reset' });
          // setChecking(false);
        })
        .catch((e) => {
          console.log(e);
          // setChecking(false);
        });
    }
  }, [state]);
  return { state, sendEmail, dispatch };
};
