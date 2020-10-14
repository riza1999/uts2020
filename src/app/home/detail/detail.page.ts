import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectoService } from 'src/app/electro.service';
import { Item } from 'src/app/Model/Item.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedItem: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private electroService: ElectoService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('itemId')) {return ;}
      const itemId = parseInt(paramMap.get('itemId'));
      this.loadedItem = this.electroService.getItem(itemId);
    });
  }
}
