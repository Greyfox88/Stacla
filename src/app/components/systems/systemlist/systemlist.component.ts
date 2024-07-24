import { Component, inject } from '@angular/core';
import { SystemService } from '../../../services/system/system.service';
import { System } from '../../../services/database/database.service';
import { SystemComponent } from '../system/system.component';


@Component({
  selector: 'app-systemlist',
  standalone: true,
  imports: [
    SystemComponent
  ],
  templateUrl: './systemlist.component.html',
  styleUrl: './systemlist.component.scss'
})
export class SystemlistComponent {
  private systemService = inject(SystemService);
  public campaignId: number = 0;
  focusedSystemId?: number|undefined;
  systemList?: System[] | undefined[];

  ngOnInit(): void {
    this.systemService.refreshSystems();
    this.systemService.systemSubject.subscribe(x => {
      this.systemList = x;
    });
  }

  focusSystem(charId:number|undefined) {
    if(this.focusedSystemId === charId)
      this.focusedSystemId = undefined;
    else
      this.focusedSystemId = charId;
  }

  refreshSystems() {
    this.systemService.refreshSystems();    
  }
}