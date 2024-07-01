import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {LoadingConfig} from '../../core/configs/loading.config';
import {LoadingInterface} from '../../core/interfaces/loading.interface';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    NgForOf
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements AfterViewInit {
  protected loadingConfig: LoadingInterface = LoadingConfig;

  @ViewChild('fakeInputFocus') fakeInputFocus: ElementRef | undefined;

  /**
   * Called after Angular has fully initialized the component's views.
   * Focuses on the native element referenced by `fakeInputFocus`.
   * This ensures that the element receives focus after the view has been initialized.
   */
  ngAfterViewInit(): void {
    this.fakeInputFocus?.nativeElement.focus();
  }
}
