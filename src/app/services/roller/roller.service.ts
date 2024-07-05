import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RollerService {
  roll(modifier: number = 0, min: number = 1, max: number = 20)
  {
    return Math.floor(Math.random() * (max)) + min + modifier;
  }
}