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
  MdSnackBarModule,
  MdTabsModule
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
  MdSnackBarModule,
  MdTabsModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
