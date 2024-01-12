import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent{
@Input() newsTitle: string="";
@Output() buscarEvent = new EventEmitter<string>();

  onBuscar() {
    this.buscarEvent.emit(this.newsTitle);
  }
}
