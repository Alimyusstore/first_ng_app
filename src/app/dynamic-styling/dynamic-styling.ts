import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.html',
  styleUrl: './dynamic-styling.css',
})
export class DynamicStyling {
  color: string = 'blue';
  color1: string = 'yellow';
  fontSizeSmall: string = '15px';
  fontSizeBig: string = '30px';
  zoom: boolean = true;

  handleToggle(){
    this.zoom = !this.zoom
  };
}
