import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdIconModule
} from '@angular/material';

const modules = [
  MdToolbarModule,
  MdIconModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
