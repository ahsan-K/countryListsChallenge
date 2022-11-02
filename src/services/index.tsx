import axios from 'axios';
import { BASE_URL } from '../utils/constant';

export const getCountries = ()=> axios.get(BASE_URL + "/all");
export const getCountriesByRegion = (name:string)=> axios.get(BASE_URL + "/region/"+name);


