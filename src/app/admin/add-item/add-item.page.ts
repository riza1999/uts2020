import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ElectoService } from '../../electro.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  private type: Text;
  constructor(
    private electroService: ElectoService,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  onTypeChange(form: NgForm){
    this.type = form.value.type;
    console.log(this.type);
  }

  onSubmit(form: NgForm){
    if(form.value.type == "GPU"){
      this.electroService.addGPU(form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock);
      this.showAlertSucces()
    }else if(form.value.type == "CPU"){
      this.electroService.addCPU(form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.baseclock,form.value.boostclock,form.value.core,form.value.thread);
      this.showAlertSucces()
    }else if(form.value.type == "RAM"){
      this.electroService.addRAM(form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.speed,form.value.size);
      this.showAlertSucces()
    }else if(form.value.type == "Motherboard"){
      this.electroService.addMotherboard(form.value.brand,form.value.photoURL,form.value.model,form.value.price,form.value.stock,form.value.chipset,form.value.forProc);
      this.showAlertSucces()
    }
  }

  async showAlertSucces(){
    const toast = await this.toastCtrl.create({
      message: 'Item created',
      color: 'primary',
      duration: 2000
    });
    toast.present();

    this.router.navigate(['/', 'admin']);
  }
}
