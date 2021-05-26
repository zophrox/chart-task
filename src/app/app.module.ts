import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { LineChartComponent } from './chartComponents/line-chart/line-chart.component';
import { InputFileComponent } from './input-file/input-file.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    InputFileComponent
    
  ],
  imports: [BrowserModule,MatInputModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
