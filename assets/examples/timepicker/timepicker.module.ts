import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbTimepickerModule, NbInputModule } from '@beast/theme';

import { TimepickerRoutingModule } from './timepicker-routing.module';
import { TimepickerShowcaseComponent } from './timepicker-showcase.component';
import { TimepickerTwelveHoursFormatComponent } from './timepicker-twelve-hours-format.component';
import { TimepickerSingleColumnComponent } from './timepicker-single-column.component';
import { TimepickerWithSecondsComponent } from './timepicker-with-seconds.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimepickerFormControlComponent } from './timepicker-form-control.component';
import { TimepickerNgModelComponent } from './timepicker-ng-model.component';
import { NbDateFnsDateModule } from '@beast/date-fns';

@NgModule({
  declarations: [
    TimepickerShowcaseComponent,
    TimepickerFormControlComponent,
    TimepickerNgModelComponent,
    TimepickerTwelveHoursFormatComponent,
    TimepickerSingleColumnComponent,
    TimepickerWithSecondsComponent,
  ],
  imports: [
    CommonModule,
    TimepickerRoutingModule,
    NbTimepickerModule.forRoot({ twelveHoursFormat: false }),
    NbDateFnsDateModule.forRoot({}),
    NbInputModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TimepickerModule {}
