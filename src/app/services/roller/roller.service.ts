import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RollerService {
  roll(modifier: number = 0, min: number = 0, max: number = 20)
  {
    return Math.floor(Math.random() * (max+1)) + min + modifier;
  }
}