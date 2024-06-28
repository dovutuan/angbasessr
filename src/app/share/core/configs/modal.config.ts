import {ModalInterface} from '../interfaces/modal.interface';

export const ModalConfirmConfig: ModalInterface = {
  nzCentered: true,
  nzNoAnimation: false,
  nzAutofocus: 'auto',
  nzKeyboard: true,
  nzOkType: 'default',
  nzCancelText: 'Cancel',
  nzOkText: 'Ok'
};

export const ModalDeleteConfig: ModalInterface = {
  nzCentered: true,
  nzNoAnimation: false,
  nzAutofocus: 'auto',
  nzKeyboard: true,
  nzOkType: 'default',
  nzOkDanger: true,
  nzCancelText: 'Cancel',
  nzOkText: 'Delete'
}

export const ModalSuccessConfig: ModalInterface = {
  nzCentered: true,
  nzNoAnimation: false,
  nzClosable: false,
  nzFooter: null
}
