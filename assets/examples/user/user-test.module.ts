import { NgModule } from '@angular/core';
import { NbLayoutModule, NbUserModule } from '@beast/theme';
import { UserTestRoutingModule } from './user-test-routing.module';
import { UserTestComponent } from './user-test.component';

@NgModule({
  declarations: [UserTestComponent],
  imports: [NbUserModule, NbLayoutModule, UserTestRoutingModule],
})
export class UserTestModule {}
