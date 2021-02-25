import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagar-cuenta',
  templateUrl: './pagar-cuenta.page.html',
  styleUrls: ['./pagar-cuenta.page.scss'],
})
export class PagarCuentaPage implements OnInit {

  constructor( private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Con cuanto pagarán?',
      inputs: [
        {
          name: 'name1',
          type: 'number',
          placeholder: 'Ingrese el total'
        },
    
     
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
