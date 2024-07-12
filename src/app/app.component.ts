import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OraclesComponent } from './components/oracles/oracles.component';
import { initFlowbite } from 'flowbite';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RollbarComponent } from './components/rollbar/rollbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    MenuComponent,
    OraclesComponent,
    RollbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Stacla';

  ngOnInit(): void{
    initFlowbite();  
  }  
}
