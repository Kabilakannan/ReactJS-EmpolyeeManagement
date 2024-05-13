import axios from "axios";

const rest_url='http://localhost:8081/api/empolyees'
export const listEmpolyee=()=>axios.get(rest_url);
export const createEmpolyee=(empolyee)=>axios.post(rest_url,empolyee);
export const getEmpolyee=(empolyeeId)=>axios.get(rest_url+'/'+empolyeeId);
export const updateEmpolyee=(empolyeeId,empolyee)=>axios.put(rest_url+'/'+empolyeeId,empolyee);
export const deleteEmpolyee=(empolyeeId)=>axios.delete(rest_url+'/'+empolyeeId)