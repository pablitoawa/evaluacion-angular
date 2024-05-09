import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http: HttpClient) { }

  private API_AUTOS = 'http://localhost:3000/vehiculos';

  ///METODO GET///
  getAutos():Observable <any>{
    return this.http.get(this.API_AUTOS);
  }

  ///METODO POST///
  postAutos(autos: JSON):Observable <any>{
    return this.http.post(this.API_AUTOS, autos);
  }

  ///METODO PUT///
  putAutos(autos: any):Observable <any>{
    return this.http.put(`${this.API_AUTOS}/${autos.id}`, autos);
  }

  ///METODO DELETE///
  deleteAutos(id: any):Observable <any>{
    return this.http.delete(`${this.API_AUTOS}/${id}`);
  }
}
