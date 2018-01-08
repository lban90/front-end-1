import {Component, OnInit} from "@angular/core";
import {Item} from "../item";
import {ItemService} from "../item.service";
import {Router} from "@angular/router";

@Component({
  selector:'my-dashboard',
  templateUrl:'./dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  title = 'Dashboard';
  itemsDashboard:Item[];
  selectedItemDashboard:Item;

  constructor(
    private router:Router,
    private itemService:ItemService){}

  onSelect(item:Item):void{
    this.selectedItemDashboard=item;
  }

  getItems():void{
    this.itemService.getItems().then(items=>this.itemsDashboard=items);
  }

  ngOnInit(): void {
    this.getItems();
  }

  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedItemDashboard.id])
  }

  gotoDetailPresentation():void{
    this.router.navigate(['/presentation',this.selectedItemDashboard.id])
  }
}
