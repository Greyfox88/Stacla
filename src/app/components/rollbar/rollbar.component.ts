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
  private drawer: DrawerInterface | undefined;
 
  ngOnDestroy(): void {
    this.rollerService.updatedRoller.unsubscribe();
  }
  ngOnInit(): void {
    const $rollbar: HTMLElement | null = document.getElementById('drawer-swipe');
    const options: DrawerOptions = {
      placement: 'bottom',
      backdrop: false,
      bodyScrolling: true,
      edge: true
    };
    const instanceOptions: InstanceOptions = {
      id: 'drawer-swipe',
      override: true
    };
    this.drawer = new Drawer($rollbar,options,instanceOptions);
    this.rollerService.updatedRoller.subscribe(x => {
      if(this.drawer!=undefined)
        this.drawer.show();
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

  recalculateTarget()
  {
    this.rollerService.recaulcuateTarget();
  }

  toggleRollbar()
  {
    this.drawer?.toggle();
  }
}
