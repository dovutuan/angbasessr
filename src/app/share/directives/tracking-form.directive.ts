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

  ngOnInit(): void {
    if (this.formName && this.formGroupDirective.form) {
      this.trackingFormService.ngOnRegister(this.formName, this.formGroupDirective.form);
    }
  };

  ngOnDestroy(): void {
    this.trackingFormService.ngOnUnregister(this.formName);
  };
}
