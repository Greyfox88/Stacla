import { Component, OnDestroy, OnInit, inject, Input } from '@angular/core';
import { NgxEditorModule, Editor  } from 'ngx-editor';
import { DatabaseService } from '../../../services/database/database.service';
import {FormsModule} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tab-campaign',
  standalone: true,
  imports: [
    NgxEditorModule,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './tab-campaign.component.html',
  styleUrl: './tab-campaign.component.scss'
})
export class TabCampaignComponent implements OnInit, OnDestroy{
  private database = inject(DatabaseService);
  public campaignId = 0;
  protected title = '';
  protected editor: Editor = new Editor;
  protected notes? = '';

  ngOnInit(): void {
    this.database.getCampaign(this.campaignId).then(campaign =>{
      if(campaign!=undefined)
        {
          this.title = campaign.Title;
          this.notes = campaign.Notes;
        }       
    });
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  save(): void {
    this.database.putCampaign({
      Id: this.campaignId,
      Title: this.title,
      Notes: this.notes
    })
  }
}