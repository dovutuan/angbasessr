import {Directive, Input, Self} from '@angular/core';
import {FormGroupDirective} from '@angular/forms';
import {TrackingFormService} from '../services/tracking-form.service';

@Directive({
  selector: '[appTrackingForm]',
  standalone: true
})
export class TrackingFormDirective {

  @Input() formName: string | undefined;

  constructor(
    @Self() private formGroupDirective: FormGroupDirective,
    private trackingFormService: TrackingFormService
  ) {
  }

  /**
   * Initializes the component.
   * Registers the form with the trackingFormService if both formName and formGroupDirective.form are defined.
   */
  ngOnInit(): void {
    if (this.formName && this.formGroupDirective.form) {
      this.trackingFormService.ngOnRegister(this.formName, this.formGroupDirective.form);
    }
  };

  /**
   * Cleans up the component before it is destroyed.
   * Unregisters the form from the trackingFormService using the formName.
   */
  ngOnDestroy(): void {
    this.trackingFormService.ngOnUnregister(this.formName);
  };
}
