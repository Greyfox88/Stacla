import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { Planet } from '../../../services/database/database.service';
import { SystemService } from '../../../services/system/system.service';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule,
    NgxEditorModule
  ],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.scss'
})
export class PlanetComponent implements OnInit, OnDestroy{
  private systemService = inject(SystemService);
  @Input() planetId: number | undefined;
  @Output() planetUpdatedEvent = new EventEmitter();
  currentPlanet: Planet = {
    Name: "New Planet",    
    Class: "Unknown",
    Seed: Math.random()*1000
  }
  editor: Editor = new Editor;

  ngOnInit(): void {
    if(this.planetId!=undefined)
    {
      this.systemService.getPlanet(this.planetId).then(result =>{
        if(result != undefined)
        {
          this.currentPlanet = result;
          this.planetId = this.currentPlanet.Id;
        }          
      }
      );
    }
    this.editor = new Editor();
  }
  
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  savePlanet(){
    this.systemService.putPlanet(this.currentPlanet);
  }

  deletePlanet(){
    if(this.planetId!=undefined)
      this.systemService.deletePlanet(this.planetId);
  }
}
