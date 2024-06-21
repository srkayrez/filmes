import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private apiUrl = 'https://localhost:7106';

  constructor(private http: HttpClient) { }

  getFilmes(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Filme?page=${page}&size=${size}`);
  }

  updateFilme(filme: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/Filme/${filme.id}`, filme);
  }

  deleteFilme(id: number): Observable<void> {
    const url = `${this.apiUrl}/Filme/${id}`;
    return this.http.delete<void>(url);
  }
}
