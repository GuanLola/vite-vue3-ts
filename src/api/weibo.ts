import axios from "../utils/axios";

// 微博热搜band
export const getWeiboHotBand = () => {
  return axios({
    url: '/weibo/api/ajax/statuses/hot_band',
    method: 'get'
  })
}

// 微博热搜列表
export const getWeiboHotSearch = () => {
  return axios({
    url: '/weibo/api/ajax/side/hotSearch',
    method: 'get'
  })
}
