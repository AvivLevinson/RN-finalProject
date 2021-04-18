import axios from 'axios';

export const login = async (phoneNumber, id) => {
  //when the user make login to the server the server save the info and sand back id or jwt
  console.log('login');
  const BASE_URL = 'http://10.0.2.2:5000/covid-insulated/auth/user';
  try {
    const response = await axios.post(BASE_URL, {
      data: {
        phoneNumber: phoneNumber,
        id: id,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response) {
      const message = `Error Send Post Request, Status Code: ${response.status} `;
      throw message;
    }

    const { data } = response;
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error networking, Error:', error);
  }
};

export const sendProcessInfo = async (state) => {
  console.log('sendProcessInfo');

  const payload = new FormData();




  
  const localUri = state.image[0];
  const filename = localUri.split('/').pop();

  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : `image`;
  
  
  const name='aviv';

  //{ uri: localUri, name: filename, type }

  payload.append('image', localUri);

  payload.append('name',name);

  const BASE_URL = 'http://10.0.2.2:5000/covid-insulated/api/user/personal-form';


  try {

   const response = await axios.post(BASE_URL, {
      data: payload,
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
