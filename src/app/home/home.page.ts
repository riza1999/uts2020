import { Component, ElementRef, ViewChild } from '@angular/core';
import { ElectoService } from '../electro.service';
import { Item } from '../Model/Item.model';
import { Ram } from '../Model/Ram.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('listview') listview: ElementRef;
  @ViewChild('gridview') gridview: ElementRef;
  itemList: Item[];
  status: boolean = true;
  constructor(
    private electroService: ElectoService
  ) {}

  ionViewWillEnter(){
    this.itemList = this.electroService.getAllItem();
  }

  toggleGridList(event: any){
    if(event.target.children[0].attributes[2].value == 'grid-outline') {
      event.target.children[0].attributes[2].value = 'list-outline';
      this.status = false;
    }
    else if(event.target.children[0].attributes[2].value == 'list-outline') {
      event.target.children[0].attributes[2].value = 'grid-outline';
      this.status = true;
    }
  }

}
