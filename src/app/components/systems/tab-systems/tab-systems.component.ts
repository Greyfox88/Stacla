import { Component, inject } from '@angular/core';
import { SystemlistComponent } from '../systemlist/systemlist.component';
import { SystemService } from '../../../services/system/system.service';

@Component({
  selector: 'app-tab-systems',
  standalone: true,
  imports: [
    SystemlistComponent
  ],
  templateUrl: './tab-systems.component.html',
  styleUrl: './tab-systems.component.scss'
})
export class TabSystemsComponent {
  systemService = inject(SystemService);

  newSystem(){
    this.systemService.newSystem();
  }
}
