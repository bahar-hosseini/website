import Axios from 'axios'

export const getAxiosInstanceJsonServer = () => {
    return Axios.create({
    baseURL:"/",
    headers:{
      "Content-Type":"aplication/json"
    }
})
}

export const getAxiosInstanceApi = () => {
    return Axios.create({
      baseURL: "/",
      headers:{
        "Content-Type":"aplication/json"
      }
    });
  };

