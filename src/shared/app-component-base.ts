import { Injector, ElementRef } from '@angular/core';
import { ElMessageService } from 'element-angular'


export abstract class AppComponentBase {


    message: ElMessageService;
    elementRef: ElementRef;

    constructor(injector: Injector) {
        this.message = injector.get(ElMessageService);
        this.elementRef = injector.get(ElementRef);
    }

}
