import {NgModule} from "@angular/core";
import{RouterModule,Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ItemsComponent} from "./item/items.component";
import {ItemDetailComponent} from "./item/item-detail.component";
import {AddComponent} from "./add/add.component";
import {DeleteComponent} from "./delete/delete.component";
import {UpdateComponent} from "./update/update.component";
import {ItemPresentationComponent} from "./dashboard/item-presentation.component";
import {UpdateItemComponent} from "./update/update-item.component";

const routes: Routes=[
  {
    path:'items',
    component:ItemsComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'update',
    component:UpdateComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  },
  {
    path:'detail/:id',
    component:ItemDetailComponent
  },
  {
    path:'presentation/:id',
    component:ItemPresentationComponent
  },
  {
    path:'update/:id',
    component:UpdateItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
