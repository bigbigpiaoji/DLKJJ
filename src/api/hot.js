import request from '@/request';

//贸易争端内容
export function queryEventByModuleAndEvent(params) {
  return request.post('/api/peHotEvent/queryEventByModuleAndEvent', params)
}

//深圳口岸进出口货物量与用电量情况
export function queryGoodsAndPower(params) {
    return request.post('/api/peSeaportData/queryGoodsAndPower', params)
  }

  //深圳市各口岸用电量情况
export function queryPowerByPort(params) {
    return request.post('/api/peSeaportData/queryPowerByPort', params)
  }

  //深圳市各口岸用电量情况各口岸数据
  export function queryPort(params) {
    return request.post('/api/peOrg/queryPort', params)
  } 
  //深圳市进出口统计情况
  export function queryInAndOut(params) {
    return request.post('/api/peSeaportData/queryInAndOut', params)
  } 