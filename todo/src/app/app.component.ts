import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuComponent } from '../components/menu/menu.component';
import { TodoComponent } from '../components/todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, FooterComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  message = 'Welcome to my todo app';
}
