import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  checkbox: { nombre: string}[] = [
    {
      nombre:'Carne',
    },
    {
      nombre:'Pastas',
    },
    {
      nombre:'Verduras',
    },
    {
      nombre:'Mariscos',
    },
    {
      nombre:'Ensaladas',
    },
   
  ]

  fechaActual: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
