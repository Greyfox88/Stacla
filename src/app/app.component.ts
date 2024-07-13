import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OraclesComponent } from './components/oracles/oracles.component';
import { initFlowbite } from 'flowbite';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RollbarComponent } from './components/rollbar/rollbar.component';
import { TranslateService } from '@ngx-translate/core';

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
  translate = inject(TranslateService);
  title = 'Stacla';

  ngOnInit(): void{
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    initFlowbite();  
  }  
}