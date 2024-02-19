import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http:HttpClient) { }

  tipoPersona(){
    return this.http.get('http://127.0.0.1:8000/api/tipoP')
  }

  guardarpersonas(nombre:any,apellido:any,cedula:any,correo:any,telefono:any, especialidad:any,idTipoPersona:any){
    
    return this.http.post('http://127.0.0.1:8000/api/persona',{
      nombre:nombre,
      apellido:apellido,
      cedula:cedula,
      correo:correo,
      telefono:telefono,
      especialidad:especialidad,
      idTipoPersona:idTipoPersona

    }
    )
  }

  buscar(buscar: any) {
    // Construye los parámetros de la URL
    let params = new HttpParams().set('buscar', buscar);
    
    // Realiza la solicitud GET con los parámetros
    return this.http.get('http://127.0.0.1:8000/api/persona/'+buscar,  { params });
  }
}
