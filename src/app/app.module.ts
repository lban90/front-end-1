import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Http, HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from 'angular-in-memory-web-api/in-memory-web-api.module';
import {InMemoryDataService} from './in-memory-data.service';
import {MatButtonModule} from '@angular/material';
import {MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSelectModule } from '@angular/material';
import {MatAutocompleteModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatInputModule, MatListModule,  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule,  MatTooltipModule, MatStepperModule,} from '@angular/material';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {ItemsComponent} from './item/items.component';
import {ItemDetailComponent} from "./item/item-detail.component";
import {AppComponent} from "./app.component"
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddComponent} from "./add/add.component";
import {UpdateComponent} from "./update/update.component";
import {DeleteComponent} from "./delete/delete.component";
import {AppRoutingModule} from "./app-routing .module";
import {ItemService} from "./item.service";
import {ItemPresentationComponent} from "./dashboard/item-presentation.component";
import {UpdateItemComponent} from "./update/update-item.component";
import {NoopAnimationDriver} from "@angular/animations/browser/src/render/animation_driver";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserAnimationBuilder} from "@angular/platform-browser/animations/src/animation_builder";


@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemPresentationComponent,
    ItemsComponent,
    DashboardComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    UpdateItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MatButtonModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatExpansionModule,
    NoopAnimationsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
