import React,{useState, useEffect,useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = React.createContext();

const AuthProvider = ({children})=>{
    const [isLogin, setIsLogin] = useState(false);
    const [isCompleteLogin, setIsCompelteLogin] = useState(false);


      //check if user was login and compelte login process 
      useEffect(()=>{
        /**
         *  (async ()=>{
          try {
            const value = await AsyncStorage.getItem('token_login')
            
            if(value !== null) {
              console.log('value: ', value);
              setIsFinishProcessInfo(true);
            }
    
          } catch(error) {
            console.log(error);
        }})()
         * 
         */
       
      },[])
    
    const setToken = (token)=>{
    try {
      await AsyncStorage.setItem('token_login', token);
      setIsCompelteLogin(true)

    } catch (error) {
      console.log(error);
    }
    }

    const isloggedIn= ()=>{
        return isLogin;
    }

    const isCompleteLoginProcess = ()=>{
        return isCompleteLogin;
    }

    return(

        <AuthContext.Provider value={{
            isloggedIn,
            isCompleteLoginProcess
        }}>
            {children}
        </AuthContext.Provider>
  
    );

}

export const useAuth = () => useContext(AuthContext);
