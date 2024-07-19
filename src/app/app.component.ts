import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RollbarComponent } from './components/rollbar/rollbar.component';
import { TranslateService } from '@ngx-translate/core';
import { ReferenceComponent } from './components/reference/reference.component';
import { BodyTabsComponent } from './components/body-tabs/body-tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    MenuComponent,
    ReferenceComponent,
    RollbarComponent,
    BodyTabsComponent
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