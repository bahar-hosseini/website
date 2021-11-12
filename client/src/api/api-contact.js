import {getAxiosInstanceApi} from "./api";


const contacts = (data, callback) => {
    getAxiosInstanceApi().post("/", data)
      .then(response => {
        const data = response.data;
        callback(true, data);
      }).catch(error => {
      console.log(error);
      callback(false, error);
    });
  };

  export default contacts

