import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbButtonModule, NbCardModule } from '@beast/theme';

import { IconRoutingModule } from './icon-routing.module';
import { IconShowcaseComponent } from './icon-showcase.component';
import { IconColorsComponent } from './icon-colors.component';

@NgModule({
  declarations: [IconShowcaseComponent, IconColorsComponent],
  imports: [CommonModule, NbIconModule, NbButtonModule, NbCardModule, IconRoutingModule],
})
export class IconModule {}
