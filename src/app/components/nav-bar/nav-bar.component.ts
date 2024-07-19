import { Component } from '@angular/core';
import { LocalizerComponent } from '../localizer/localizer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    LocalizerComponent,
    TranslateModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
