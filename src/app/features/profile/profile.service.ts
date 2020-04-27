import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrl } from 'src/app/shared/constants/url-constants';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  constructor(private readonly http: HttpClient) { }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get<any>(BaseUrl.URL + '/view/profile');
  }
  editDetails(data: any): Observable<any> {
    return this.http.put<any>(BaseUrl.URL + '/edit/user', data);
  }
  getUserById(viewUserId: any): Observable<any> {
    return this.http.get<any>(BaseUrl.URL + '/view/user/' + viewUserId);
  }

}
