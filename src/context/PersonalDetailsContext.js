import React,{useState, useEffect, useContext, useReducer} from 'react';


const PersonalDetailsContext = React.createContext();


const detailsReducer = (state, action) => {
    switch (action.type) {
      case TYPES.SET_INFO: {
        return { ...state, info: action.payload.info };
      }
      case TYPES.SET_LOCATION: {
        return { ...state, location: action.payload.location };
      }
      case TYPES.SET_IMAGE: {
        return { ...state, image: [...state.image,action.payload.image] };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  }




export const PersonalDetailsProvider = ({children})=>{

    const [state, dispatch] = useReducer(detailsReducer, {});

    return(
        <PersonalDetailsContext.Provider value={{
            dispatch,
            state
        }}>
            {children}
        </PersonalDetailsContext.Provider>
  
    );

}

export const usePresonalDetails = () => useContext(PersonalDetailsContext);
