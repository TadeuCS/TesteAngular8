import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICarro } from '../models/icarro.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private url:string = environment.api_url.concat('carros');

  constructor(private http: HttpClient) { }

  listarTodos() : Observable<ICarro[]>{
    return this.http.get<ICarro[]>(this.url);
  }
}
