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
    console.log(this.formName);
    console.log(this.formGroupDirective.form);
    if (this.formName && this.formGroupDirective.form) {
      console.log(1);
      this.trackingFormService.onRegister(this.formName, this.formGroupDirective.form);
    }
  };

  ngOnDestroy(): void {
    this.trackingFormService.onUnregister(this.formName);
  };
}
