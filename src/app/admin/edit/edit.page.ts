import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ElectoService } from 'src/app/electro.service';
import { Item } from 'src/app/Model/Item.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  loadedItem: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private electroService: ElectoService,
    private router: Router,
    private toastCtrl: ToastController

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('itemId')) {return ;}
      const itemId = parseInt(paramMap.get('itemId'));
      this.loadedItem = this.electroService.getItem(itemId);
    });
  }

  onSubmit(form: NgForm){
    console.log(form);
    if(this.loadedItem.type == "GPU"){
      this.electroService.editGPU(this.loadedItem.id,form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock);
      this.showAlertSucces()
    }else if(this.loadedItem.type == "CPU"){
      this.electroService.editCPU(this.loadedItem.id,form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.baseclock,form.value.boostclock,form.value.core,form.value.thread);
      this.showAlertSucces()
    }else if(this.loadedItem.type == "RAM"){
      this.electroService.editRAM(this.loadedItem.id,form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.speed,form.value.size);
      this.showAlertSucces()
    }else if(this.loadedItem.type == "Motherboard"){
      this.electroService.editMotherboard(this.loadedItem.id,form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.chipset,form.value.forProc);
      this.showAlertSucces()
    }
  }

  async showAlertSucces(){
    const toast = await this.toastCtrl.create({
      message: 'Item Edited',
      color: 'primary',
      duration: 2000
    });
    toast.present();

    this.router.navigate(['/', 'admin']);
  }

}
