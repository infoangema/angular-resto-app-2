import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-descripcion-producto',
  templateUrl: './descripcion-producto.page.html',
  styleUrls: ['./descripcion-producto.page.scss'],
})
export class DescripcionProductoPage implements OnInit {


  checkbox: { nombre: string, precio: number}[] = [
    {
      nombre:'Carne extra',
      precio:45,
    },
    {
      nombre:'Salsa tártara mediterranea del oeste',
      precio:45,
    },
    {
      nombre:'Extra queso',
      precio:25,
    },
    {
      nombre:'Panceta',
      precio:10,
    },
    {
      nombre:'Tomate',
      precio:20,
    },
    {
      nombre:'Lechuga',
      precio:10,
    },
    {
      nombre:'Condimentos',
      precio:0,
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
