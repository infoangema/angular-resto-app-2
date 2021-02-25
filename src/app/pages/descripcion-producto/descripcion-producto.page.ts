import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';




@Component({
  selector: 'app-descripcion-producto',
  templateUrl: './descripcion-producto.page.html',
  styleUrls: ['./descripcion-producto.page.scss'],
})
export class DescripcionProductoPage implements OnInit {

  cantidad ="";


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

  constructor( public _pickerCtrl:PickerController) { }

  ngOnInit() {
  }

  async mostrarCantidad(){
    const picker = await this._pickerCtrl.create({
      columns: [{
        name:'Cantidad de producto',
        options:[
          {text:'Cantidad: 2', value:2},
          {text:'Cantidad: 3', value:3},
          {text:'Cantidad: 4', value:4},
          {text:'Cantidad: 5', value:5},
        ]
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: (value) => {
            console.log(`Got Value ${value}`);
            

          }
        }
      ]
    });

    await picker.present();

  }

  

}
