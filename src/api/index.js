// 当前这个模块：API进行统一管理
import requests from "./request";

const reqDirectory = () => {
  return requests({url: '/home/directory',method: 'get'})
}
const reqCssBasic = () => {
  return requests({url: '/notes/cssbasic', method: 'get'})
}
const reqVueBasic = () => {
  return requests({url: '/notes/vuebasic', method: 'get'})
}
const reqGitBasic = () => {
  return requests({url: '/notes/gitbasic', method: 'get'})
}
const reqJqueryBasic = () => {
  return requests({url: '/notes/jquerybasic', method: 'get'})
}

const reqText = () => {
  return requests({url: '/notes/gitbasic', method: 'get'})
}


export {
  reqDirectory,
  reqCssBasic,
  reqVueBasic,
  reqGitBasic,
  reqJqueryBasic,
  reqText
}
