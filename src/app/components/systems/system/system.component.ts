import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SystemModel, SystemService } from '../../../services/system/system.service';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { TranslateModule } from '@ngx-translate/core';
import { PlanetComponent } from '../planet/planet.component';
import { Planet } from '../../../services/database/database.service';

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

  getOrbitStyle(planet: Planet){
    let spacing: number = 175/this.currentSystem.Planets.length;
    let index: number = this.currentSystem.Planets.indexOf(planet)+1;
    let orbitValue: number = (index*spacing)+32;
    console.log(orbitValue);
    let orbitMargin: number = orbitValue/2;
    let styleString =`width: ${orbitValue}em; height: ${orbitValue}em; margin-top: -${orbitMargin}em; margin-left: -${orbitMargin}em`;
    return styleString;
  }
}
