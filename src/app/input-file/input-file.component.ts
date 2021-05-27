import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent implements OnInit {
  data: any;
  reader
  @ViewChild('inputRef', {static: false}) inputRef: ElementRef;
  constructor(private dataService:DataService) {}

  ngOnInit(): void {}

  saveJsonDataAsObject(event): void {
    this.data = event.target.result;
    const parsedData = JSON.parse(this.data);
    this.dataService.setFileData$(parsedData);
    this.inputRef.nativeElement.value = '';
  }

  fileData(event) {
    const file = event.target.files[0];
    this.reader = new FileReader();
    this.reader.readAsText(file, 'UTF-8');
    this.reader.onload = this.saveJsonDataAsObject.bind(this);
  }
}
