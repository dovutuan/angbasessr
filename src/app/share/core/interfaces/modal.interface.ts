import {EventEmitter, TemplateRef, Type, ViewContainerRef} from '@angular/core';
import {NzButtonShape, NzButtonSize, NzButtonType} from 'ng-zorro-antd/button';
import {NzSafeAny} from 'ng-zorro-antd/core/types';
import {Direction} from '@angular/cdk/bidi';

export interface ModalButtonOptions<T = NzSafeAny> {
  label: string;
  type?: NzButtonType;
  danger?: boolean;
  shape?: NzButtonShape;
  ghost?: boolean;
  size?: NzButtonSize;
  autoLoading?: boolean;
  show?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
  loading?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
  disabled?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);

  onClick?(this: ModalButtonOptions<T>, contentComponentInstance?: T): NzSafeAny | Promise<NzSafeAny>;

  [key: string]: NzSafeAny;
}

export interface ModalInterface<T = NzSafeAny, D = NzSafeAny, R = NzSafeAny> {
  nzCentered?: boolean;
  nzClosable?: boolean;
  nzOkLoading?: boolean;
  nzOkDisabled?: boolean;
  nzCancelDisabled?: boolean;
  nzCancelLoading?: boolean;
  nzDraggable?: boolean;
  nzNoAnimation?: boolean;
  nzAutofocus?: 'ok' | 'cancel' | 'auto' | null;
  nzMask?: boolean;
  nzMaskClosable?: boolean;
  nzKeyboard?: boolean;
  nzZIndex?: number;
  nzWidth?: number | string;
  nzCloseIcon?: string | TemplateRef<void>;
  nzOkType?: 'primary' | 'default' | 'dashed' | 'link' | 'text' | null;
  nzOkDanger?: boolean;
  nzModalType?: 'default' | 'confirm';
  nzOnCancel?: EventEmitter<T>;
  nzOnOk?: EventEmitter<T>;
  nzData?: D;
  nzMaskStyle?: { [key: string]: string };
  nzBodyStyle?: { [key: string]: string };
  nzWrapClassName?: string;
  nzClassName?: string;
  nzStyle?: object;
  nzTitle?: string | TemplateRef<{}>;
  nzFooter?: string | TemplateRef<{}> | Array<ModalButtonOptions<any>> | null;
  nzCancelText?: string | null;
  nzOkText?: string | null;
  nzContent?: string | TemplateRef<NzSafeAny> | Type<any>;
  nzCloseOnNavigation?: boolean;
  nzViewContainerRef?: ViewContainerRef;
  nzAfterOpen?: EventEmitter<void>;
  nzAfterClose?: EventEmitter<R>;
  nzIconType?: string;
  nzDirection?: Direction;
}
