import request from '@/request';

//右侧规上企业生产排名，按用电量，按用电增长排名
export function queryEnterpriseByType(params) {
    return request.post('/api/peEnterpriseData/queryEnterpriseByType', params)
  }

//   左下角行业用电增长情况
export function queryTwoYearPowerIncrease(params) {
    return request.post('/api/peEnterpriseData/queryTwoYearPowerIncrease', params)
  }

//   3，用电量构成与增长情况
export function queryIndustryOfPower(params) {
    return request.post('/api/peEnterpriseData/queryIndustryOfPower', params)
  }

//   39大类行业用电增速与增加值情况 /api/peEnterpriseData/queryIndustryByPowerSpeed
export function queryIndustryByPowerSpeed(params) {
    return request.post('/api/peEnterpriseData/queryIndustryByPowerSpeed', params)
  }

//   左上5个指标卡片接口获取
export function queryTargetOfGs(params) {
    return request.post('/api/peEnterpriseData/queryTargetOfGs', params)
  }

//   左侧中间企业生产运行情况
export function queryNowEnterpriseAbout(params) {
    return request.post('/api/peEnterpriseData/queryNowEnterpriseAbout', params)
  }

//   查询近30日和本年，正常运行的企业，的企业数、占比以及同比
export function queryCountByTime(params) {
    return request.post('/api/peEnterpriseData/queryCountByTime', params)
  }

//   规上工业整体用电增速
export function queryGsgyByTime(params) {
    return request.post('/api/peEnterpriseData/queryGsgyByTime', params)
  }

//   规上企业-规上工业整体用电增速。上方本年累计内容
export function queryGsgyNow(params) {
    return request.post('/api/peEnterpriseData/queryGsgyNow', params)
  }

//7，企业活跃度占比情况
export function queryTitleOfActive(params) {
    return request.post('/api/peEnterpriseData/queryTitleOfActive', params)
  }

//   根据传入时间的时间参数分别查询月、年的企业活跃度占比情
export function queryEnterpriseOfActive(params) {
    return request.post('/api/peEnterpriseData/queryEnterpriseOfActive', params)
  }

