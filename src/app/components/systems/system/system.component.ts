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
    //175 is a bit of a magic number at the moment just to try keep it all on screen
    let spacing: number = 175/this.currentSystem.Planets.length;
    let index: number = this.currentSystem.Planets.indexOf(planet)+1;
    let orbitValue: number = (index*spacing)+32;
    let orbitMargin: number = orbitValue/2;
    let styleString =`width: ${orbitValue}em; height: ${orbitValue}em; margin-top: -${orbitMargin}em; margin-left: -${orbitMargin}em`;
    return styleString;
  }

  getPlanetStyle(planet: Planet){
    let size: number = 15;
    if(planet.Seed!=undefined)
      size = planet.Seed/100;
    let maxSize: number = 30/this.currentSystem.Planets.length;
    if(size>maxSize)
      size=maxSize;
    if(size<1.5)
      size = 1.5;
    let styleString =`font-size: ${size}em`;
    return styleString;
  }

  getRingStyle(size:number){
    let ringSize = size/5;
    let ringMargin = size/10;
    let styleString = `width: ${ringSize}em; height: ${ringSize}em; margin-top: -${ringMargin}em; margin-left: -${ringMargin}em; border: 0.3em solid rgba(160, 147, 130, 0.7);`
    return styleString;
  }
}
