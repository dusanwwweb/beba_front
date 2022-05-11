import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Child } from '../models/child.model';
import { Section } from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private readonly url = environment.apiBaseUrl;
  
  constructor(private httpClient: HttpClient) {}

  public getSections(): Observable<Section[]> {
    return this.httpClient.get<Section[]>(`${this.url}/api/section`);
  }

  public getSectionById(id: number): Observable<Section> {
    return this.httpClient.get<Section>(`${this.url}/api/section/${id}`);
  }

  public getChildrenBySectionId(id: number): Observable<Child[]> {
    return this.httpClient.get<Child[]>(`${this.url}/api/section/${id}/children`)
  }

}