import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
})
export class ListaProductosPage implements OnInit {

  slidesOpt= {

    slidesPerView:2.2,

  };

  




  plato: { img: string, titulo: string, desc: string, precio: number}[] = [
    {
      img: '/assets/slides/nachosCuadrados.jpg',
      titulo: 'Nachos con Queso',
      desc: 'Mira y comparte increíbles fotos de todo el mundo',
      precio: 500,
    },
    {
      img: '/assets/slides/nuggets.jpg',
      titulo: 'Nugets de Pollo',
      desc: 'Toda tu música favorita está aquí',
      precio: 450,

    },
    {
      img: '/assets/slides/ensalada.jpg',
      titulo: 'Ensalada de lechuga tomate y salsa rosa...',
      desc: 'El mejor calendario del mundo a tu disposición',
      precio: 340,

    },
  
  ];

 // public productos: Producto[];
  

  

  constructor() {}

  ngOnInit() {  
   // this.getProductos();
  }

  

  getProductos() {

  }



}
