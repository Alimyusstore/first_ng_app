import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { Components } from './component/component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    // Components,
     RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My first Angular App');
  name = signal('Ajibola Alim');
  
}