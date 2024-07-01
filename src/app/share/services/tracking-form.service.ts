import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ModalService} from './modal.service';
import {TrackingFormInterface} from '../core/interfaces/tracking-form.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackingFormService {

  private formList: Array<TrackingFormInterface> = [];

  constructor(private modalService: ModalService) {
  }

  ngOnRegister = (formName: string, form: FormGroup): void => {
    const data = this.formList?.find((item: TrackingFormInterface) => item.formName === formName);
    data ? (data.form = form) : this.formList?.push({formName, form});
  };

  ngOnUnregister = (formName: string | undefined): void => {
    if (formName) {
      const index = this.formList?.findIndex((item: TrackingFormInterface) => item?.formName === formName);
      (index && index !== -1) && this.formList?.splice(index, 1);
    }
  };

  ngOnUnregisterAll = (): void => {
    this.formList = [];
  };

  ngOnCheckFormChange = (formName: string | null = null, onOk?: any, onCancel?: any) => {
    if (this.ngOnChecking(formName)) {
      this.modalService.ngOnWarning('Đang có bản ghi thay đổi', 'Hãy save lại trước', onOk, onCancel);
    }
  };

  private ngOnChecking = (formName: string | null = null): boolean => {
    return !!this.formList
      ?.filter((item: TrackingFormInterface) => formName ? (item.formName === formName) : item)
      ?.some((item: TrackingFormInterface) => item.form.dirty && item.form.touched);
  };
}
