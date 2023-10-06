import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmDiaglogComponent } from '../modals/confirm-diaglog/confirm-diaglog.component';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  bsModalRef? : BsModalRef<ConfirmDiaglogComponent>;

  constructor(private modalService: BsModalService) {}

  confirm(
    title = 'Confirmation',
    message = 'Are you sure you want to do this',
    btnOkText = 'Ok',
    btnCancelText ='Cancel'
  ):Observable<boolean>{
    const config ={
      initialState:{
        title,
        message,
        btnOkText,
        btnCancelText
      }
    }
    this.bsModalRef = this.modalService.show(ConfirmDiaglogComponent, config);
    return this.bsModalRef.onHidden!.pipe(
      map(()=> {
        return this.bsModalRef!.content!.result
      })
    )
  }

}
