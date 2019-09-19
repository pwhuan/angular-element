import { Component, OnInit } from '@angular/core';
import { AccountServiceProxy } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {
  _accountService: AccountServiceProxy

  constructor(_accountService: AccountServiceProxy) {
    this._accountService = _accountService;
  }

  ngOnInit() {
    this._accountService.logout().subscribe(res => {
      console.log(res)
    })
    // this._accountService.logout().subscribe(result => {
    //   console.log(result);
    // })
  }

}
