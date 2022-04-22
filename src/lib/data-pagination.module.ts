import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataPaginationComponent } from './data-pagination.component';



@NgModule({
  declarations: [
    DataPaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataPaginationComponent
  ]
})
export class DataPaginationModule { }
