import request from '@/utils/request'

// 登录请求
export function loginRequest(data) {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}

// 注册请求
export function signRequest(data) {
  return request({
    url: '/api/reg',
    method: 'post',
    data
  })
}

// 获取文章分类
export function getContentClassify() {
  return request({
    url: '/my/cate/list',
    method: 'get'
  })
}

// 添加分类请求
export function addContentClassify(data) {
  return request({
    url: '/my/cate/add',
    method: 'post',
    data: data
  })
}

export function editContentClassify(data) {
  return request({
    url: '/my/cate/info',
    method: 'put',
    data: data
  })
}

export function delContentClassify(id) {
  return request({
    url: '/my/cate/del',
    method: 'delete',
    params: { id: id }
  })
}

// 获取文章列表
export function getContentList(data) {
  return request({
    url: '/my/article/list',
    method: 'get',
    params: data
  })
}

// 删除文章
export function delContentList(data) {
  return request({
    url: '/my/article/info',
    method: 'delete',
    params: { id: data }
  })
}
