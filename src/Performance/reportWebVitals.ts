import { ReportHandler, getCLS, getFID, getLCP } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};




export function sendToAnalytics(metric: any) {
  const body = JSON.stringify(metric);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    fetch('/analytics', {body, method: 'POST', keepalive: true});
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);

// function sendToAnalytics(metric) {
//   const body = JSON.stringify(metric);
//   const url = 'https://example.com/analytics';

//   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
//   if (navigator.sendBeacon) {
//     navigator.sendBeacon(url, body);
//   } else {
//     fetch(url, { body, method: 'POST', keepalive: true });
//   }
// }

// reportWebVitals(sendToAnalytics);

export default reportWebVitals;