import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Notebook } from '../models/notebook.model';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

  private readonly url = environment.apiBaseUrl;
  
  constructor(private httpClient: HttpClient) {}

  public getNotebookById(id: number): Observable<Notebook> {
    return this.httpClient.get<Notebook>(`${this.url}/api/notebook/${id}`);
  }

}
