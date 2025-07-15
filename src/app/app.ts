import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Components } from './component/component';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Components],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('My first Angular App');
  name = signal('Ajibola Alim');
  
}