import {Component} from '@angular/core';
import {LoadingService} from '../../../share/services/loading.service';
import {ModalService} from '../../../share/services/modal.service';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TrackingFormDirective} from '../../../share/directives/tracking-form.directive';
import {NgForOf, NgIf} from '@angular/common';
import {TrackingFormService} from '../../../share/services/tracking-form.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TrackingFormDirective,
    NgForOf,
    NgIf
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  form = new FormGroup({
    name: new FormControl(''),
  });

  form1 = new FormGroup({
    name: new FormControl(''),
  });

  form2 = new FormGroup({
    names: new FormArray([
      new FormControl(''),
      new FormControl(''),
    ])
  });

  test = true;

  constructor(
    private loadingService: LoadingService,
    private modalService: ModalService,
    private trackingFormService: TrackingFormService,
  ) {
  }

  // get aliases() {
  //     return this.form2.get('names') as FormArray;
  // }
  //
  // onTest = () => {
  //     console.log(this.form);
  // };
  //
  // onTest1 = () => {
  //     this.trackingFormService.onCheckFormChange()
  // };

  onShowLoading = () => {
    this.loadingService.ngOnShow();
  };

  onHideLoading = () => {
    this.loadingService.ngOnHide();
  };

  onShowModal = () => {
    this.modalService.ngOnConfirm();
  }
}
