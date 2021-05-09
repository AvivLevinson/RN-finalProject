import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:5000/covid-insulated';

export const login = async (phoneNumber, id) => {
  //when the user make login to the server the server save the info and sand back id or jwt
  console.log('login');
  const endPoint = '/auth/user';
  
  const userInfo = {
    phone: phoneNumber,
    id: id,
  }
  
  try {
    const response = await axios.post(BASE_URL+endPoint,userInfo,{
      headers: {
        'Content-Type': 'application/json',
      },
    });


    if (!response) {
      const message = `Error Send Post Request, Status Code: ${response.status} `;
      throw message;
    }

    const { data } = response;
    console.log('data from response login: ',data);
    return data.user;

  } catch (error) {
    console.log('Error networking, Error:', error);
  }
};

export const sendProcessInfo = async (state) => {
  console.log('sendProcessInfo');

  const payload = new FormData();

/**
 * 
 * 
 */


  
  const localUri = state.image[0];
  const name='aviv';

  payload.append('image', localUri);

  payload.append('name',name);

  const endPoint = '/auth/user/finish-process';

  try {

   const response = await axios.post(BASE_URL + endPoint,payload, {
      headers: {
        'content-type': 'multipart/form-data',      
      },
    });
 
    if (!response) {
      const message = `Error Send Post Request, Status Code: ${response.status} `;
      throw message;
    }
    const { data } = response;
    console.log(data);
    return true;

  } catch (error) {
    console.log('Error networking, Error:', error);
  }
};
