import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from 'src/shared/app-component-base';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppComponentBase implements OnInit {

  constructor(
    injector: Injector
  ) {
    super(injector)
  }

  ngOnInit() {
  }

  handle(time): void {
    this.message.info(time)
  }


}
