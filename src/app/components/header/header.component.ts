import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor( private actionSheetCtr: ActionSheetController) { }

  ngOnInit() {}

  onClick(){
    this.presentActionSheet();

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtr.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Opciones',
        icon: 'options-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Login',
        icon: 'log-in-outline',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Lenguaje',
        icon: 'chatbox-ellipses-outline',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Compartir',
        icon: 'paper-plane-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'Cancelar',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}


