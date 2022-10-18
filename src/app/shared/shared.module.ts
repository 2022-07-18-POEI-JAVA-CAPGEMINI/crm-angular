import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';

@NgModule({
  declarations: [BtnComponent, TableLightComponent, TotalPipe, StateDirective],
  imports: [CommonModule, RouterModule],
  exports: [
    IconsModule,
    TemplatesModule,
    BtnComponent,
    TableLightComponent,
    TotalPipe,
    ReactiveFormsModule,
    StateDirective,
  ],
})
export class SharedModule {}
