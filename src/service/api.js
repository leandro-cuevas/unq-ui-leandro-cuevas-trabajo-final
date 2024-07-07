import axios from "axios";

const urlApi  = "https://preguntados-api.vercel.app/api/";
const get            = (url, config = {})  => axios.get(url, config).then(res => res.data);
const post           = (url, data, config = {}) => axios.post(url, data, config).then(res => res.data);

export const getDifficulty  = ()            => get(urlApi + "difficulty");
export const getQuestions   = (difficulty)  => get(urlApi+"questions?difficulty="+difficulty);
export const sendAnswer     = (body)        => post(urlApi + "answer", body);