import HttpClient from './HttpClient'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { BASE_URL } from '@env'


// const endpointHost = ``
const endpointHost = `/notes`


// const getData = async (key) => {
//   // get Data from Storage
//   try {
//     const data = await AsyncStorage.getItem(key);
//     if (data !== null) {
//       //No User
//       return data;
//     } else {
//       return null
//     }
//   } catch (error) {
//     console.log({ error });
//     return null
//   }
// };


const getItemsNote = async () => HttpClient.get(`${endpointHost}/getItems`,
  {
    // headers: {
    //   Authorization: 'Bearer ' + await getData("MY_PERA_TOKEN")
    // },
  })


const submitItemNote = async (data) => HttpClient.post(`${endpointHost}/item`,
  data,
  {
    // headers: {
    //   Authorization: 'Bearer ' + await getData("MY_PERA_TOKEN")
    // },
  })


const updateItemNote = async (data) => HttpClient.put(`${endpointHost}/item/${data.id}`,
  data,
  {
    // headers: {
    //   Authorization: 'Bearer ' + await getData("MY_PERA_TOKEN")
    // },
  })


const deleteItemNote = async (id) => HttpClient.delete(`${endpointHost}/item/${id}`,
  {
    // headers: {
    //   Authorization: 'Bearer ' + await getData("MY_PERA_TOKEN")
    // },
  })


export {
  getItemsNote,
  submitItemNote,
  updateItemNote,
  deleteItemNote
}
