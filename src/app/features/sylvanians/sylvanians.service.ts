import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from 'src/app/shared/constants/url-constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SylvaniansService {
 
  
   constructor(private readonly http: HttpClient) { }

  getSylvanianList(): Observable<any> {
    return this.http.get<any>(BaseUrl.URL + '/get-sylvanians-list');
  }
  
}
