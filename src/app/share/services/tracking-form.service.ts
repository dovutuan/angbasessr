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

  /**
   * Registers a form with its name and FormGroup in the formList array.
   * If a form with the same name already exists, updates its FormGroup.
   * @param formName - The name identifier of the form.
   * @param form - The FormGroup instance to be registered.
   */
  ngOnRegister = (formName: string, form: FormGroup): void => {
    const data = this.formList?.find((item: TrackingFormInterface) => item.formName === formName);
    data ? (data.form = form) : this.formList?.push({formName, form});
  };

  /**
   * Unregisters a form from the formList array based on its name.
   * @param formName - The name identifier of the form to unregister.
   */
  ngOnUnregister = (formName: string | undefined): void => {
    if (formName) {
      const index = this.formList?.findIndex((item: TrackingFormInterface) => item?.formName === formName);
      (index && index !== -1) && this.formList?.splice(index, 1);
    }
  };

  /**
   * Clears the formList array by unregistering all forms.
   */
  ngOnUnregisterAll = (): void => {
    this.formList = [];
  };

  /**
   * Checks if any registered form has unsaved changes.
   * If changes are detected and formName is provided, prompts a warning modal.
   * @param formName - The name identifier of the form to check for changes. If null, checks all forms.
   * @param onOk - Callback function to execute when the user confirms the modal action.
   * @param onCancel - Callback function to execute when the user cancels the modal action.
   */
  ngOnCheckFormChange = (formName: string | null = null, onOk?: any, onCancel?: any) => {
    if (this.ngOnChecking(formName)) {
      this.modalService.ngOnWarning('There are unsaved changes', 'Please save them first', onOk, onCancel);
    }
  };

  /**
   * Checks if any registered form has unsaved changes.
   * @param formName - The name identifier of the form to check for changes. If null, checks all forms.
   * @returns True if any form has unsaved changes; otherwise, false.
   */
  private ngOnChecking = (formName: string | null = null): boolean => {
    return !!this.formList
      ?.filter((item: TrackingFormInterface) => formName ? (item.formName === formName) : item)
      ?.some((item: TrackingFormInterface) => item.form.dirty && item.form.touched);
  };
}
