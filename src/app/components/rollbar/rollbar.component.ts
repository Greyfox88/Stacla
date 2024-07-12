import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RollerService } from '../../services/roller/roller.service';
import { NgClass } from '@angular/common';
import { Drawer, DrawerOptions, InstanceOptions } from 'flowbite';
import { DrawerInterface } from 'flowbite';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rollbar',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './rollbar.component.html',
  styleUrl: './rollbar.component.scss'
})
export class RollbarComponent implements OnInit, OnDestroy{
  rollerService = inject(RollerService)
 
  ngOnDestroy(): void {
    this.rollerService.updatedRoller.unsubscribe();
  }
  ngOnInit(): void {
    this.rollerService.updatedRoller.subscribe(x => {
      const $rollbar: HTMLElement | null = document.getElementById('drawer-swipe');
      const options: DrawerOptions = {
        placement: 'bottom',
        backdrop: false,
        bodyScrolling: true,
        edge: true,
    };
    const instanceOptions: InstanceOptions = {
      id: 'drawer-swipe',
      override: false
    };
    const drawer: DrawerInterface = new Drawer($rollbar,options,instanceOptions);
      // show the drawer
      drawer.show();
    });
  }

  clear()
  {
    this.rollerService.clear();
  }

  roll()
  {
    this.rollerService.rollForCharacterAsset();
  }
}
