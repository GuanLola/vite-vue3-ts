import axios from "../utils/axios"
export const getSearchDefault = () => {
  return axios({
    url: '/bilibili/api/x/web-interface/search/default',
    method: 'get'
  })
}