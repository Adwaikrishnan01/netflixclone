import axios from 'axios'
import {baseURL} from './components/constants/constants.js'


const instance = axios.create({
    baseURL: baseURL

  });
  export default instance;