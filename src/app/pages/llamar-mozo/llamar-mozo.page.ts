import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-llamar-mozo',
  templateUrl: './llamar-mozo.page.html',
  styleUrls: ['./llamar-mozo.page.scss'],
})
export class LlamarMozoPage implements OnInit {

  constructor( private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Listo!',
      subHeader: 'Un mozo se dirigirá a tu mesa en poco tiempo',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}
