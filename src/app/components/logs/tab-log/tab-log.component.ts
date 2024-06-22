import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { DatabaseService, Log } from '../../../services/database/database.service';
import { LogComponent } from '../log/log.component';

@Component({
  selector: 'app-tab-log',
  standalone: true,
  imports: [
    LogComponent
  ],
  templateUrl: './tab-log.component.html',
  styleUrl: './tab-log.component.scss'
})
export class TabLogComponent implements OnInit, OnDestroy{
  private database = inject(DatabaseService);
  public campaignId: number = 0;
  logs?: Log[] | undefined[];
  focusedLogId?: number|undefined;

  ngOnInit(): void {
    this.refreshLogs();
  }

  ngOnDestroy(): void {
    this.logs = undefined;
  }

  newEntry(): void {
    this.database.putLog({
      CampaignId: this.campaignId,
      Title: 'New Entry',
      Entry: ''
    })
    this.database.getLogs(this.campaignId).then(logsResult =>{
      this.logs = logsResult; 
    });
  }

  focusLog(logId:number|undefined) {
    if(this.focusedLogId === logId)
      this.focusedLogId = undefined;
    else
      this.focusedLogId = logId;
  }

  refreshLogs(){
    this.database.getLogs(this.campaignId).then(logsResult =>{
      this.logs = logsResult; 
    });
  }
}
