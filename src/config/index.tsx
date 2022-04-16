export const CONFIG = {
  baseURL: '/',
  isDevelopment: process.env.REACT_APP_IS_DEVELOPMENT,
  title: 'Geoserver control panel for GeoBook',
  http: {
    baseURL: process.env.REACT_APP_IS_DEVELOPMENT as string,
    requestTimeout: 60000
  }
}
