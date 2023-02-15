// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // Production
  // loginApiBaseUrl: "https://emislogin.tnschools.gov.in/emis_login/api",
  // apiBaseUrl: "https://emis3.tnschools.gov.in",

  //Stagging
  loginApiBaseUrl: "http://13.232.216.80/emis_login/api",
  apiBaseUrl: "http://13.232.216.80/emis3APICode",
  loginAuthorization: "EMIS@2019_api",
  loggedInAuthorization: "EMIS_web@2019_api",
  authorization: "EMIS_web@2019_api",
  
  production: false,
  environment: "LOCAL",
  showEnvironment: true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
