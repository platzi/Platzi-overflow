import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdGridListModule,
  MdRadioModule,
  MdProgressSpinnerModule,
  MdMenuModule
} from '@angular/material';

const modules = [
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdGridListModule,
  MdRadioModule,
  MdProgressSpinnerModule,
  MdMenuModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
