import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable()
export class DataService {

  private baseUrl

  private cache: any = {};

  constructor(private http: HttpClient) {
  }

  getData(route: any, refresh: any) {
    if (this.dataForRouteIsCached(route, refresh)) {
      return of(this.cache[route]);
    } else { // no cached data or refresh requested
      return this.http.get<any>(this.baseUrl + route).pipe(map((response: any) => {
        this.cache[route] = response;
        return response;
      }));
    }
  }

  getDataWithParams(route: any, params: any, refresh: any) {
    if (this.dataForRouteIsCached(route, refresh)) {
      return of(this.cache[route]);
    } else { // no cached data or refresh requested
      return this.http.get<any>(route, { params: params }).pipe(map((response: any) => {
        this.cache[route] = response;
        return response;
      }));
    }
  }

  getRecord(route: any) {
    return this.http.get<any>(this.baseUrl + route);
  }

  getRecordWithParams(route: any, params: any) {
    return this.http.get<any>(this.baseUrl + route, { params: params });
  }

  post(route: any, data: any) {
    return this.http.post<any>(this.baseUrl + route, data);
  }
  put(route: any, data: any) {
    return this.http.put<any>(route, data);
  }

  pdf(route: any, data: any) {
    return this.http.post(this.baseUrl + route, data, {
      responseType: 'arraybuffer'
    });
  }

  delete(route: any) {
    return this.http.delete(this.baseUrl + route).pipe(map((response: any) => {
      return response;
    }));
  }

  // getReport(route) {
  //   return this.http.get(this.baseUrl + route, { responseType: 'blob' });
  // }
  getReport(route: any) {
    return this.http.get(route, { responseType: 'blob' });
  }
  getExternalData(route: any) {
    return this.http.get<any>(route).pipe(map((response: any) => {
      return response;
    }));
  }

  dataForRouteIsCached(route: any, refresh: any) {
    return this.cache[route] && (refresh === false || refresh === undefined);
  }

  clearCache() {
    this.cache = {};
  }

  clearRouteCache(route: any) {
    this.cache[route] = null;
  }

  getHttpParams(data: any) {
    let httpParams = new HttpParams();
    Object.keys(data).forEach(function (key) {
      httpParams = httpParams.append(key,
        data[key]
      );
    });
    return data;
  }

  getJSON(jsonurl: any) {
    return this.http.get<any[]>(jsonurl);
  }

  getTnSportsSchlFilter(api: any) {
    let token: any = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        Token: token
      })
    };
    return this.http.get(this.baseUrl + api, httpOptions);
  }

  getTnSportsDistrictSchls(api: any) {
    let token: any = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        Token: token
      })
    };
    return this.http.get(this.baseUrl + api,httpOptions);
  }
}
