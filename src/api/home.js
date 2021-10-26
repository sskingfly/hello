import request from '../utils/request'

export const getLunbo = () => {
  return request({
    method: 'get',
    url: '/api/getlunbo'
  })
}

export const getGrids = () => {
  return request({
    method: 'get',
    url: '/api/grids'
  })
}