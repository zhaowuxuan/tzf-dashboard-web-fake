import request from '@/util/request'

export function getNewestdata(channel, inst_id, inst_type) {
  return request({
    url: '/cc/SwapOpenInterest/newest',
    method: 'post',
    params: {
        channel,
        inst_id,
        inst_type
    }
  })
}