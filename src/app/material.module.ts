import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule
} from '@angular/material';

const modules = [
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
