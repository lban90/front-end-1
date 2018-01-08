import {Component, Input, OnInit} from "@angular/core";
import {Item} from "../item"
import {ItemService} from "../item.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';

@Component({
  selector:'item-add',
  templateUrl:'./add.component.html',
  styleUrls:['./add.component.css']
})

export class AddComponent implements OnInit{
  @Input() item:Item;
  items:Item[];
  selectedItem:Item;

  constructor(
    private itemService:ItemService,
    private route:ActivatedRoute,
    private location:Location
  ){}

  goBack():void{
    this.location.back()
  }

  add(manufacturer:string,name:string,description:string,cuantity:number,price:number):void {
    if(!name){return};
    if(isNaN(cuantity)===true){return};
    if(isNaN(price)===true){return};
    this.itemService.create(manufacturer,name,description,cuantity,price).then(item=>{this.items.push(item);this.selectedItem=null}).then(()=>this.goBack())
  }

  ngOnInit():void{
    this.route.paramMap.switchMap((params:ParamMap)=>this.itemService.getItem(+params.get('id'))).subscribe(item=>this.item=item)
    this.itemService.getItems().then(items=>this.items=items);
  }

}
