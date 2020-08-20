import axios from 'axios';

class APIClass {
  constructor(){
    this.instance = axios.create({
      baseURL: process.env.ROOM_APIURL,
      timeout: 100000
    });
  }

  getDefaultHeaders(){
    return{
      responseType: 'application/json'
    };
  }

  get(url) {
    return this.instance.get( url, {
      headers:this.getDefaultHeaders()
    });
  }

  post(url,data){
    return this.instance.post(url,data,{
      headers: this.getDefaultHeaders()
    });
  }

  call(method, url, data){
    return this.instance[method](url, data, {
      method,
      headers: this.getDefaultHeaders()
    });
  }
}

const API = new APIClass();

export default API;