import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

const modules = [
  MdButtonModule,
  MdCheckboxModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
