import { Component,Input, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from "@angular/router";
import {Location} from "@angular/common";
import {ItemService} from "../item.service";
import {Item} from "../item";
import 'rxjs/add/operator/switchMap';


@Component({
  selector:'item-detail',
  templateUrl:'./item-detail.component.html',
  styleUrls:['./item-detail.component.css']

})

export class ItemDetailComponent implements OnInit{

  @Input() item:Item;

  items: Item[];
  selectedItem:Item;

  constructor(
    private itemService:ItemService,
    private route:ActivatedRoute,
    private location:Location
  ){}

  goBack():void{
      this.location.back();
  }

  ngOnInit():void{
      this.route.paramMap.switchMap((params:ParamMap)=>this.itemService.getItem(+params.get('id'))).subscribe(item=>this.item=item);
  }

  save():void{
      this.itemService.update(this.item).then(()=>this.goBack())
  }

//  add(name:string):void {
//    name=name.trim();
//    if(!name){return}
//    this.itemService.create(name).then(item=>{this.items.push(item);this.selectedItem=null})
//  }
}
