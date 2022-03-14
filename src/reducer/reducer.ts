export type State = {
  name: string;
  email: string;
  title: string;
  message: string;
};

export type Action = {
  type: ActionType;
  payload: State;
};

export enum ActionType {
  NAME = 'NAME',
  EMAIL = 'EMAIL',
  TITLE = 'TITLE',
  MESSAGE = 'MESSAGE',
  RESET = 'RESET',
}

export const initialState = { name: '', email: '', title: '', message: '' };

export const reducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case ActionType.NAME:
      return { ...state, name: action.payload.name };
    case ActionType.EMAIL:
      return { ...state, email: action.payload.email };
    case ActionType.TITLE:
      return { ...state, title: action.payload.title };
    case ActionType.MESSAGE:
      return { ...state, message: action.payload.message };
    case ActionType.RESET:
      return initialState;
    default:
      throw new Error();
  }
};
