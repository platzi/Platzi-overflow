import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdListModule
} from '@angular/material';

const modules = [
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdListModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
