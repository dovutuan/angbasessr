import {Injectable, TemplateRef, Type} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd/modal';
import {ModalConfirmConfig} from '../core/configs/modal.config';
import {ModalInterface} from '../core/interfaces/modal.interface';
import {NzSafeAny} from 'ng-zorro-antd/core/types';
import {TypeModalEnum} from '../core/enums/modal.enum';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private nzModalService: NzModalService
  ) {
  }

  ngOnConfirm = (title?: string | TemplateRef<{}>,
                 content?: string | TemplateRef<NzSafeAny> | Type<NzSafeAny>,
                 onOk?: any,
                 onCancel?: any): void => {
    this.ngOnBuildModal(TypeModalEnum.CONFIRM, title, content, onOk, onCancel);
  };

  ngOnInfo = (title?: string | TemplateRef<{}>,
              content?: string | TemplateRef<NzSafeAny> | Type<NzSafeAny>,
              onOk?: any,
              onCancel?: any): void => {
    this.ngOnBuildModal(TypeModalEnum.INFO, title, content, onOk, onCancel);
  };

  ngOnSuccess = (title?: string | TemplateRef<{}>,
                 content?: string | TemplateRef<NzSafeAny> | Type<NzSafeAny>,
                 onOk?: any,
                 onCancel?: any): void => {
    this.ngOnBuildModal(TypeModalEnum.SUCCESS, title, content, onOk, onCancel, true);
  };

  ngOnError = (title?: string | TemplateRef<{}>,
               content?: string | TemplateRef<NzSafeAny> | Type<NzSafeAny>,
               onOk?: any,
               onCancel?: any): void => {
    this.ngOnBuildModal(TypeModalEnum.ERROR, title, content, onOk, onCancel);
  };

  ngOnWarning = (title?: string | TemplateRef<{}>,
                 content?: string | TemplateRef<NzSafeAny> | Type<NzSafeAny>,
                 onOk?: any,
                 onCancel?: any): void => {
    this.ngOnBuildModal(TypeModalEnum.WARNING, title, content, onOk, onCancel);
  };

  private ngOnBuildModal = (type: string,
                            title?: string | TemplateRef<{}>,
                            content?: string | TemplateRef<NzSafeAny> | Type<NzSafeAny>,
                            onOk?: any,
                            onCancel?: any,
                            isAutoClose: boolean = false,
                            timeAutoClose: number = 11500) => {
    let modal = null;

    const options: ModalInterface = ModalConfirmConfig;
    options.nzTitle = title;
    options.nzContent = content;
    onOk && (options.nzOnOk = onOk);
    onCancel && (options.nzOnCancel = onCancel);

    switch (type) {
      case TypeModalEnum.CONFIRM:
        modal = this.nzModalService.confirm(options);
        break;
      case TypeModalEnum.INFO:
        modal = this.nzModalService.info(options);
        break;
      case TypeModalEnum.SUCCESS:
        modal = this.nzModalService.success(options);
        break;
      case TypeModalEnum.ERROR:
        modal = this.nzModalService.error(options);
        break;
      case TypeModalEnum.WARNING:
        modal = this.nzModalService.warning(options);
        break;
    }

    modal?.afterClose.subscribe(() => modal.destroy());

    if (modal && isAutoClose) {
      setTimeout(() => modal.destroy(), timeAutoClose);
    }
  };
}
