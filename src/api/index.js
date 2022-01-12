import request from '@/plugins/request'
export function API_GET(url,data = {}) {
  return request({
    url,
    method: 'GET',
    params: data
  })
}

export function API_POST(url,data = {}) {
  return request({
    url,
    method: 'POST',
    data
  })
}

export function API_PUT(url,data = {}) {
  return request({
    url,
    method: 'PUT',
    data
  })
}

export function API_DELETE(url,data = {}) {
  return request({
    url,
    method: 'DELETE',
    data
  })
}