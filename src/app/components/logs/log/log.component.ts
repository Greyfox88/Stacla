import { Component, OnDestroy, OnInit, inject, Input, EventEmitter, Output } from '@angular/core';
import { NgxEditorModule, Editor  } from 'ngx-editor';
import { DatabaseService } from '../../../services/database/database.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [
    NgxEditorModule,
    FormsModule
  ],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss'
})

export class LogComponent implements OnInit, OnDestroy{
  private database = inject(DatabaseService);
  public campaignId = 0;
  @Input() logId: number | undefined = 0;
  @Output() logUpdatedEvent = new EventEmitter();
  
  protected title = '';
  protected editor: Editor = new Editor;
  protected entry = '';


  ngOnInit(): void {
    if(this.logId!=undefined)
    {
      this.database.getLog(this.logId).then(log =>{
        if(log!=undefined)
          {
            this.title = log.Title;
            this.entry = log.Entry;
          }       
      });
    }
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  save(): void {
    this.database.putLog({
      Id: this.logId,
      CampaignId: this.campaignId,
      Title: this.title,
      Entry: this.entry
    })
    this.logUpdatedEvent.emit();
  }

  delete():void {
    if(this.logId!=undefined)
    {
      this.database.deleteLog(this.logId);
      this.logUpdatedEvent.emit();
    }   
  }
}
