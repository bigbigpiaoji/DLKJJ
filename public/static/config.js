var MODE = 'dev';
var MAP = {
  'dev': {
    baseUrl: '',
    geojsonUrl: './static/geojson',
    imgUrl: './static/img',
  },
  'test': {
    baseUrl: 'http://10.11.32.119',
    geojsonUrl: '/web/include/company-overview/dist/static/geojson',
    imgUrl: './static/img',
  },
  'prod': {
    baseUrl: 'http://10.150.42.234',
    geojsonUrl: '/web/include/company-overview/dist/static/geojson',
    imgUrl: './static/img',
  },

}
window.CONFIG = MAP[MODE]