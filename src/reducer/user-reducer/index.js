import React, { useContext, useReducer } from 'react';

import {TYPES} from './types.js';

const UserInfoContext = React.createContext();


const userInfoReducer = (state, action) => {
  console.log('userInfoReducer');
  switch (action.type) {
    case TYPES.SET_INFO: {
      return { ...state, info: action.payload.info };
    }
    case TYPES.SET_LOCATION: {
      return { ...state, location: action.payload.location };
    }
    case TYPES.SET_IMAGE: {
      return { ...state, image: action.payload.image };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}



const UserInfoProvider = ({ children, setIsFinishProcessInfo}) => {
  const [state, dispatch] = useReducer(userInfoReducer, {});
  const value = { state, dispatch, setIsFinishProcessInfo };
  return <UserInfoContext.Provider value={value}>{children}</UserInfoContext.Provider>;
}





const useUserInfo = ()=>{
    const context = useContext(UserInfoContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a UserInfoProvider')
      }
      return context
}




export { UserInfoProvider,useUserInfo };
