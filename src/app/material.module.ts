import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdIconModule,
  MdCardModule
} from '@angular/material';

const modules = [
  MdToolbarModule,
  MdIconModule,
  MdCardModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
