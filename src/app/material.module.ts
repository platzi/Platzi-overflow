import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdGridListModule,
  MdRadioModule
} from '@angular/material';

const modules = [
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdGridListModule,
  MdRadioModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
