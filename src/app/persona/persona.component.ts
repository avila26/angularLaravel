import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../servicios/hospital.service';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements OnInit{
 datosC: any
  error:any

  ngOnInit(): void {
    this.tipoPersona()
  }

 
  constructor(private hospitalS: HospitalService) { }

  tipoPersona() {

    this.hospitalS.tipoPersona().subscribe({
      next: (datos: any) => {
        this.datosC = datos.tiposp
      }, error: (err) => {
        console.log('error:' + err)
      }
    })
  }

  guardarD(nombre:any,apellido:any,cedula:any,correo:any,telefono:any, especialidad:any,idTipoPersona:any) {

    this.hospitalS.guardarpersonas(nombre.value,apellido.value,cedula.value,correo.value,telefono.value, especialidad.value,idTipoPersona.value).subscribe({
      next: (datos: any) => {
        this.error = datos.error
        console.log(datos.error)
      }, error: (err) => {
        console.log('error' + err)
      }
    })
  }
  buscalo(buscar: any) {
    this.hospitalS.buscar(buscar.value).subscribe({
      next: (datos: any) => {
      }, error: (err) => {
        console.log('error' + err)

      }

    })
  }

}
