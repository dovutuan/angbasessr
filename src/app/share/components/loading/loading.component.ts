import {Component} from '@angular/core';
import {TypeLoadingConfig} from '../../core/configs/loading.config';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

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
export class LoadingComponent {
  protected typeLoadingConfig = TypeLoadingConfig;
  public typeCustom: string | null = null;
}
