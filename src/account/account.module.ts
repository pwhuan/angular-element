import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';

import { ElModule } from 'element-angular'
import { SharedModule } from 'src/shared/shared.module';
import { AccountServiceProxy } from './account.service';

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent
  ],
  imports: [
    ElModule,
    SharedModule,
    AccountRoutingModule
  ],
  providers: [
    AccountServiceProxy
  ],
  bootstrap: [AccountComponent]
})
export class AccountModule { }
