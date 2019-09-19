import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
//element
import { ElModule } from 'element-angular';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LeftSideNavComponent
    ],
    exports: [
        
        LeftSideNavComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            ]
        };
    }
}
