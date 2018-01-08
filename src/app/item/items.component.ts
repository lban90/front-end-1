import {Component, OnInit} from '@angular/core';
import {Item} from "../item"
import {ItemService} from "../item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-items',
  styleUrls: ['./items.component.css'],
  templateUrl: './items.component.html'
})

export class ItemsComponent implements OnInit{
  title = 'Front end';
  items: Item[];
  selectedItem:Item;

  constructor(
    private router:Router,
    private itemService:ItemService){}

  onSelect(item:Item):void{
    this.selectedItem=item;
  }

  getItems():void{
    this.itemService.getItems().then(items=>this.items=items);
  }

  ngOnInit(): void {
    this.getItems();
  }

  addItem(name:string):void {
      name=name.trim();
      if(!name){return}
      this.itemService.createItem(name).then(item=>{this.items.push(item);this.selectedItem=null})
  }

  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedItem.id])
  }


}
