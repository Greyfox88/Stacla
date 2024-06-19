import { Component, OnDestroy, OnInit  } from '@angular/core';
import { NgxEditorModule, Editor  } from 'ngx-editor';

@Component({
  selector: 'app-station',
  standalone: true,
  imports: [
    NgxEditorModule
  ],
  templateUrl: './station.component.html',
  styleUrl: './station.component.scss'
})
export class StationComponent implements OnInit, OnDestroy{
  editor: Editor = new Editor;
  html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
