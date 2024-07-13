import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

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
  translate = inject(TranslateService);

  siteLanguage = 'en';
  languageList = [
    { code: 'en', label: 'English' },
    // { code: 'de', label: 'Deutsch' },
  ];

  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();
    if (selectedLanguage) {
      this.translate.use(localeCode);
    }
  }

  onChange()
  {
    this.changeSiteLanguage(this.siteLanguage);
  }
}
