import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  url='http://127.0.0.1:8000/ressources'

  constructor(private http: HttpClient) { }
  getRessource(){
    return this.http.get(this.url);
  }
}
