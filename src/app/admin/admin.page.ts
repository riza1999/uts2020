import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding } from '@ionic/angular';
import { ElectoService } from '../electro.service';
import { Item } from '../Model/Item.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  itemList: Item[];
  constructor(
    private electroService: ElectoService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.itemList = this.electroService.getAllItem();
  }

  onDelete(item: Item){
    this.electroService.deleteItem(item.id);
    this.itemList = this.electroService.getAllItem();
  }

  async presentAlert(item: Item, slidingItem: IonItemSliding) {
    slidingItem.close();
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.onDelete(item)
        }
      ]
    });
    await alert.present();
  }

}
