import { ToastType } from '../components/toast/Toast';
import {
  createContext,
  Dispatch,
  FunctionComponent,
  useReducer,
  ReactNode,
} from 'react';

export interface ToastState {
  type: ToastType;
  message: string;
}
 
interface ToastList {
  lists: ToastState[];
}

type ToastAction = {
  actionType: 'APPEND_TOAST';
  toastType: ToastType;
  message: string;
};

const toastDefaultValue: ToastList = {
  lists: [],
};

export const toastStateContext = createContext(toastDefaultValue);

type ToastDispatch = Dispatch<ToastAction>;

export const toastDispatchContext = createContext<ToastDispatch>(() => null);

const toastReducer = (state: ToastList, action: ToastAction): ToastList => {
  switch (action.actionType) {
    case 'APPEND_TOAST':
      return {
        lists: state.lists.concat({
          type: action.toastType,
          message: action.message,
        }),
      };
    default:
      return state;
  }
};

export const ToastProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [toast, toastDispatch] = useReducer(toastReducer, toastDefaultValue);
  return (
    <toastStateContext.Provider value={toast}>
      <toastDispatchContext.Provider value={toastDispatch}>
        {children}
      </toastDispatchContext.Provider>
    </toastStateContext.Provider>
  );
};
