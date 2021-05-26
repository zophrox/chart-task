import { Component, OnInit } from '@angular/core';
import { DataServiseService } from '../data-servise.service';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent implements OnInit {
  data: any;
  constructor(private dataService: DataServiseService) {}

  ngOnInit(): void {}

  saveJsonDataAsObject(event): void {
    this.data = event.target.result;
    const parsedData = JSON.parse(this.data);
    this.dataService.setFileData$(parsedData);
  }

  fileData(event) {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = this.saveJsonDataAsObject.bind(this);
  }
}
