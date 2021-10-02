export const initialState = { name: '', email: '', title: '', message: '' };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'title':
      return { ...state, title: action.payload };
    case 'message':
      return { ...state, message: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
};
