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

  /**
   * Displays a confirmation modal with the specified title, content, onOk, and onCancel callbacks.
   * @param title - The title of the confirmation modal, which can be a string or a TemplateRef.
   * @param content - The content of the confirmation modal, which can be a string, a TemplateRef, or a component.
   * @param onOk - Callback function to execute when the OK button is clicked.
   * @param onCancel - Callback function to execute when the Cancel button is clicked.
   */
  ngOnConfirm = (title?: string | TemplateRef<{}>,
                 content?: string | TemplateRef<NzSafeAny> | Type<NzSafeAny>,
                 onOk?: any,
                 onCancel?: any): void => {
    this.ngOnBuildModal(TypeModalEnum.CONFIRM, title, content, onOk, onCancel);
  };

  /**
   * Displays an information modal with the specified title, content, onOk, and onCancel callbacks.
   * @param title - The title of the information modal, which can be a string or a TemplateRef.
   * @param content - The content of the information modal, which can be a string, a TemplateRef, or a component.
   * @param onOk - Callback function to execute when the OK button is clicked.
   * @param onCancel - Callback function to execute when the Cancel button is clicked.
   */
  ngOnInfo = (title?: string | TemplateRef<{}>,
              content?: string | TemplateRef<NzSafeAny> | Type<NzSafeAny>,
              onOk?: any,
              onCancel?: any): void => {
    this.ngOnBuildModal(TypeModalEnum.INFO, title, content, onOk, onCancel);
  };

  /**
   * Displays a success modal with the specified title, content, onOk, and onCancel callbacks.
   * The modal automatically closes after a certain time if isAutoClose is true.
   * @param title - The title of the success modal, which can be a string or a TemplateRef.
   * @param content - The content of the success modal, which can be a string, a TemplateRef, or a component.
   * @param onOk - Callback function to execute when the OK button is clicked.
   * @param onCancel - Callback function to execute when the Cancel button is clicked.
   */
  ngOnSuccess = (title?: string | TemplateRef<{}>,
                 content?: string | TemplateRef<NzSafeAny> | Type<NzSafeAny>,
                 onOk?: any,
                 onCancel?: any): void => {
    this.ngOnBuildModal(TypeModalEnum.SUCCESS, title, content, onOk, onCancel, true);
  };

  /**
   * Displays an error modal with the specified title, content, onOk, and onCancel callbacks.
   * @param title - The title of the error modal, which can be a string or a TemplateRef.
   * @param content - The content of the error modal, which can be a string, a TemplateRef, or a component.
   * @param onOk - Callback function to execute when the OK button is clicked.
   * @param onCancel - Callback function to execute when the Cancel button is clicked.
   */
  ngOnError = (title?: string | TemplateRef<{}>,
               content?: string | TemplateRef<NzSafeAny> | Type<NzSafeAny>,
               onOk?: any,
               onCancel?: any): void => {
    this.ngOnBuildModal(TypeModalEnum.ERROR, title, content, onOk, onCancel);
  };

  /**
   * Displays a warning modal with the specified title, content, onOk, and onCancel callbacks.
   * @param title - The title of the warning modal, which can be a string or a TemplateRef.
   * @param content - The content of the warning modal, which can be a string, a TemplateRef, or a component.
   * @param onOk - Callback function to execute when the OK button is clicked.
   * @param onCancel - Callback function to execute when the Cancel button is clicked.
   */
  ngOnWarning = (title?: string | TemplateRef<{}>,
                 content?: string | TemplateRef<NzSafeAny> | Type<NzSafeAny>,
                 onOk?: any,
                 onCancel?: any): void => {
    this.ngOnBuildModal(TypeModalEnum.WARNING, title, content, onOk, onCancel);
  };

  /**
   * Builds and displays a modal of the specified type with the provided options.
   * @param type - The type of modal to display (CONFIRM, INFO, SUCCESS, ERROR, WARNING).
   * @param title - The title of the modal, which can be a string or a TemplateRef.
   * @param content - The content of the modal, which can be a string, a TemplateRef, or a component.
   * @param onOk - Callback function to execute when the OK button is clicked.
   * @param onCancel - Callback function to execute when the Cancel button is clicked.
   * @param isAutoClose - Whether the modal should automatically close after a certain time.
   * @param timeAutoClose - The time in milliseconds after which the modal should automatically close.
   */
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
