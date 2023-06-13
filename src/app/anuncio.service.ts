import { Anuncios } from './anuncio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  url = 'http://localhost:3000/anuncios';

  constructor(private http: HttpClient) {}

  save(anuncios: Anuncios):  Observable<Anuncios>{
    return this.http.post<Anuncios>(this.url, anuncios);
  }
}
