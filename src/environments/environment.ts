export const environment = {
  production: false,
  environment: "LOCAL",
  showEnvironment: true,
  telemetryContext: {
    authToken: '',
    batchSize: 1,
    pdata: { // Optional. Producer of the event
      id: "languagelab.portal", // Required. unique id assigned to that component
      pid: "languagelab.portal.portal", // Optional. In case the component is distributed, then which instance of that component
      ver: "1.0.0"// Optional. version number of the build
    },
    host: "",
    env: "languagelab.portal", // Required. Unique environment where the event has occured.
    apislug: '/v1/',
    endpoint: 'telemetry'
  }
};
