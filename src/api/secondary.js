import request from '@/request';

//   第二产业发展电力支撑情况
export function queryEventByModuleAndEvent(params) {
    return request.post('/api/peHotEvent/queryEventByModuleAndEvent', params)
  }

  //  用电量与增加值变化趋势
export function queryPowerAndIncrease(params) {
    return request.post('/api/peIndustryData/queryPowerAndIncrease', params)
  }

    //  贡献比例
export function queryContributionRatio(params) {
    return request.post('/api/peIndustryData/queryContributionRatio', params)
  }

      //  每度电产生增加值
export function queryPowerProduceAdd(params) {
    return request.post('/api/peEnterpriseData/queryPowerProduceAdd', params)
  }

//   各行业电力支撑与发展趋势情况
export function queryTradeDevelopTrend(params) {
    return request.post('/api/peEnterpriseData/queryTradeDevelopTrend', params)
  }
  
  //   中间5个卡片指标
export function queryFiveIndex(params) {
    return request.post('/api/peEnterpriseData/queryFiveIndex', params)
  }

    //  各区二产用电量情况
export function queryDistrictPower(params) {
        return request.post('/api/peEnterpriseData/queryDistrictPower', params)
      }

    //   行业用电增长情况
    export function queryIndustryPowerIncrease(params) {
        return request.post('/api/peEnterpriseData/queryIndustryPowerIncrease', params)
      }

    //   制造业用电量排名接口
    export function queryMakePowerRanking(params) {
        return request.post('/api/peEnterpriseData/queryMakePowerRanking', params)
      }

    //   正增长最快/负增长最快行业二合一接口
    export function queryIncreaseFast(params) {
        return request.post('/api/peEnterpriseData/queryIncreaseFast', params)
      }