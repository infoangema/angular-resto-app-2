import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  slidesOpt= {

    slidesPerView:2.2,

  };

  slides: { img: string, titulo: string, desc: string, precio: number }[] = [
    {
      img: '/assets/slides/nachos.png',
      titulo: 'Nachos con Queso',
      desc: 'Mira y comparte increíbles fotos de todo el mundo',
      precio: 500,
    },
    {
      img: '/assets/slides/nachos.png',
      titulo: 'Nugets de Pollo',
      desc: 'Toda tu música favorita está aquí',
      precio: 450,

    },
    {
      img: '/assets/slides/nachos.png',
      titulo: 'Ensalada de lechuga tomate y salsa rosa...',
      desc: 'El mejor calendario del mundo a tu disposición',
      precio: 340,

    },
    {
      img: '/assets/slides/nachos.png',
      titulo: 'Tu ubicación',
      desc: 'Siempre sabremos donde estás!',    
      precio: 290,

    }
  ];

 // public productos: Producto[];
  

  

  constructor() {}

  ngOnInit() {  
   // this.getProductos();
  }

  getProductos() {

  }



}
