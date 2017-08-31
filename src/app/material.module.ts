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
  MdMenuModule,
  MdSnackBarModule
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
  MdMenuModule,
  MdSnackBarModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
