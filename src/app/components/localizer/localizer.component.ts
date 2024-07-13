import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-localizer',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './localizer.component.html',
  styleUrl: './localizer.component.scss'
})
export class LocalizerComponent {
  locales = [
    { code: 'en-GB', name: 'English' },
    { code: 'de', name: 'Deutsche (German)' },
  ];
  constructor(
    @Inject(LOCALE_ID) public activeLocale: string
  ) {}
  onChange() {
    window.location.href = `/${this.activeLocale}`;
  }
}
