import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from '../models/child.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  private readonly url = environment.apiBaseUrl;
  
  constructor(private httpClient: HttpClient) {}

  public getChildren(): Observable<Child[]> {
    return this.httpClient.get<Child[]>(`${this.url}/api/children`);
  }

  public geChildById(id: number): Observable<Child> {
    return this.httpClient.get<Child>(`${this.url}/api/children/${id}`);
  }

  public addChild(child: Child): Observable<Child> {
    return this.httpClient.post<Child>(`${this.url}/api/children`, child);
  }

  public updateChild(id: number, child: Child): Observable<Child> {
    return this.httpClient.put<Child>(`${this.url}/api/children/${id}`, child);
  }

  public deleteChild(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/api/children/${id}`);
  }

}
