import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  databaseService = inject(DatabaseService)
  uploadFileContent:string = "";
  uploadFile: Blob | undefined;

  exportData(){
    this.databaseService.exportFiles();
  }

  importData(){
    if(this.uploadFile!=undefined)
      this.databaseService.importFiles(this.uploadFile);    
    this.uploadFile = undefined;
  }

  clearData(){
    this.databaseService.clearData();

  }

  public async onFileSelected(event:any){
    this.uploadFile = event.target.files[0];
  }
}