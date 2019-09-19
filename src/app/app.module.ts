import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/shared/shared.module';
import { ElModule } from 'element-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    ElModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
