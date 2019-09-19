import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';

import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { SharedModule } from './shared/shared.module';
import { ElModule } from 'element-angular';
import { ConfigService } from './config.service';

const appConfig = (config: ConfigService) => {
  return () => {
    return config.loadConfig();
  };
};


@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    SharedModule.forRoot(),
    RootRoutingModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfig,
      deps: [ConfigService],
      multi: true
    },
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
