import {Component,OnInit} from "@angular/core";
import {Item} from "../item";
import {Router} from "@angular/router";
import {ItemService} from "../item.service";

@Component({
  selector:'update',
  templateUrl:'./update.component.html',
  styleUrls:['./update.component.css']
})

export class UpdateComponent implements OnInit{

  itemsUpdate:Item[];
  selectedItemUpdate:Item;

  constructor(
    private router:Router,
    private itemService:ItemService
  ){}

  onSelect(item:Item):void{
      this.selectedItemUpdate=item;
  }

  getItems():void{
      this.itemService.getItems().then(items=>this.itemsUpdate=items)
  }

  saveAddOne():void{
    this.itemService.updateAddOne(this.selectedItemUpdate)
  }

  saveSubstractOne():void{
    this.itemService.updateSubstractOne(this.selectedItemUpdate)
  }

  ngOnInit(): void {
    this.getItems();
  }

  gotoUpdate():void{
      this.router.navigate(['/update',this.selectedItemUpdate.id])
  }
}
