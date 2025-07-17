import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Components } from './component/component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  Components,  RouterLink, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My first Angular App');
  name = signal('Ajibola Alim');
  
}