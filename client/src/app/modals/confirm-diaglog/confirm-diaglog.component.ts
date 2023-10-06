import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-diaglog',
  templateUrl: './confirm-diaglog.component.html',
  styleUrls: ['./confirm-diaglog.component.css']
})
export class ConfirmDiaglogComponent implements OnInit {
  title =''
  message =''
  btnOkText =''
  btnCancelText = ''
  result = false;

  constructor(public bsModalRef: BsModalRef){}

  ngOnInit(): void {
  }

  confirm(){
    this.result = true;
    this.bsModalRef.hide();
  }

  decline(){
    this.bsModalRef.hide();
  }
}
