import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'<h1 align="center">{{title}}</h1>\n' +
  '<h2 align="center">\n' +
  '  <nav>\n' +
  '    <a routerLink="/dashboard" routerLinkActive="active" >Dashboard</a>\n' +
  '    <a routerLink="/add" routerLinkActive="active" >Add item</a>\n' +
  '    <a routerLink="/update" routerLinkActive="active">Update item</a>\n' +
  '    <a routerLink="/delete" routerLinkActive="active">Delete item</a>\n' +
  '    <a routerLink="/items" routerLinkActive="active">Items</a>\n' +
  '  </nav>\n' +
  '</h2>\n' +
  '<router-outlet></router-outlet>',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'Optica plus';
}
