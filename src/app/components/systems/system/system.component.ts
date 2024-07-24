import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SystemModel, SystemService } from '../../../services/system/system.service';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { TranslateModule } from '@ngx-translate/core';
import { PlanetComponent } from '../planet/planet.component';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [
    FormsModule,
    NgxEditorModule,
    TranslateModule,
    PlanetComponent
  ],
  templateUrl: './system.component.html',
  styleUrl: './system.component.scss'
})
export class SystemComponent implements OnInit, OnDestroy{
  private systemService = inject(SystemService);
  @Input() systemId: number | undefined = 0;
  @Output() systemUpdatedEvent = new EventEmitter();
  currentSystem: SystemModel = {
    Name: "New System",
    Class: "Unknown",
    Planets: []
  }
  focusedPlanetId?: number|undefined;

  editor: Editor = new Editor;

  ngOnInit(): void {
    let $orrery = document.getElementById('orrery');
    let $universe = document.getElementById('universe');
    let $solarsys = document.getElementById('solar-system');

    if(this.systemId!=undefined)
    {
      this.systemService.getSystemModel(this.systemId).then(result =>{
        if(result != undefined)
        {
          this.currentSystem = result;
        }
          
      }
      );
    }

    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  save(){
    this.systemService.putSystem(this.currentSystem);
  }

  delete(){
    if(this.systemId!=undefined)
      this.systemService.deleteSystemModel(this.systemId);
  }

  addPlanet(){
    if(this.systemId!=undefined)
      this.systemService.newPlanet(this.systemId);
  }

  focusPlanet(planetId:number|undefined) {
    if(this.focusedPlanetId === planetId)
      this.focusedPlanetId = undefined;
    else
      this.focusedPlanetId = planetId;
  }
}
