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

// 获取笔记分类接口
const getNoteSort = () => {
  return requests.get('/notes/getsortlist')
}
// 根据笔记分类获取笔记
const getSomeNote = (sort) => {
  return requests({
    url: '/notes/getsomenote',
    method: 'post',
    data: {
      sort
    }
  })
}
// 根据id获取笔记内容
const getNoteContent = (id) => {
  return requests({
    url: '/notes/getnotecontent',
    method: 'post',
    data: {
      noteId: id
    }
  })
}
// 获取所有笔记信息
const getAllNotes = (num) => {
  return requests({
    method: 'post',
    url: '/notes/getallnote',
    data: {
      number: num
    }
  })
}


export {
  reqDirectory,
  reqCssBasic,
  reqVueBasic,
  reqGitBasic,
  reqJqueryBasic,
  reqText,
  getNoteSort,
  getSomeNote,
  getNoteContent,
  getAllNotes
}
