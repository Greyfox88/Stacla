import { EventEmitter, Injectable, Output } from '@angular/core';
import { Asset, Character } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class RollerService {
  @Output() updatedRoller = new EventEmitter();

  SourceName: string = "";
  LabelA: string = "";
  LabelB: string = "";
  ValueA: number = 0;
  ValueB: number = 0;
  Modifier: number = 0;
  Target:number = 0;
  RollA: number = 0;
  RollB: number = 0;
  ResultA: boolean = false;
  ResultB: boolean = false;

  KeyCharacterA: keyof Character | undefined;
  KeyCharacterB: keyof Character | undefined;
  KeyAssetA: keyof Character | undefined;
  KeyAssetB: keyof Character | undefined;


  roll(modifier: number = 0, min: number = 1, max: number = 20)
  {
    return Math.floor(Math.random() * (max)) + min + modifier;
  }

  clear()
  {

    this.SourceName = "";
    this.LabelA = "";
    this.LabelB = "";
    this.ValueA = 0;
    this.ValueB = 0;
    this.Modifier = 0;
    this.Target = 0;
    this.RollA = 0;
    this.RollB = 0;
    this.ResultA = false;
    this.ResultB = false;
    this.updatedRoller.emit();
  }

  rollForCharacterAsset(){
    this.RollA = this.roll();
    this.RollB = this.roll();
    this.ResultA = this.RollA<=this.Target;
    this.ResultB = this.RollB<=this.Target;
  }

  prepareCharacter(character: Character, fieldLabel: string, fieldName: string, isDiscipline: boolean = false ){
    this.SourceName = character.Name;
    let dynamicKey = fieldName as keyof Character;
    if(isDiscipline)  
    {
      this.LabelB = fieldLabel;
      this.KeyCharacterB = dynamicKey;    
    }         
    else
    {
      this.LabelA = fieldLabel;  
      this.KeyCharacterA = dynamicKey;  
    }

    if(this.KeyCharacterA != undefined)    
      this.ValueA = character[this.KeyCharacterA as keyof Character] as number;    

    if(this.KeyCharacterB != undefined)    
      this.ValueB = character[this.KeyCharacterB as keyof Character] as number;    

    this.Target = this.ValueA + this.ValueB + this.Modifier;
    this.updatedRoller.emit();
  }

  prepareAsset(asset: Asset, fieldLabel: string, fieldName: string, isDepartment: boolean = false )
  {
    this.SourceName = asset.Name;
    let dynamicKey = fieldName as keyof Character;
    if(isDepartment)  
    {
      this.LabelB = fieldLabel;
      this.KeyCharacterB = dynamicKey;    
    }         
    else
    {
      this.LabelA = fieldLabel;  
      this.KeyCharacterA = dynamicKey;  
    }

    if(this.KeyCharacterA != undefined)    
      this.ValueA = asset[this.KeyCharacterA as keyof Asset] as number;    

    if(this.KeyCharacterB != undefined)    
      this.ValueB = asset[this.KeyCharacterB as keyof Asset] as number;    

    this.Target = this.ValueA + this.ValueB + this.Modifier;
    this.updatedRoller.emit();
  }
}