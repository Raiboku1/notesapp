import axios from 'axios';


const axiosConfig = () => {
  let client = axios.create({
      baseURL: "http://10.0.2.2:9000", //mag depende ang port sa port pud nga gigamit sa local
      headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
      }
  });




  return client;
};


const HttpClient = {
    client: axiosConfig()
};


export default HttpClient.client;
