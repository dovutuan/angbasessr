import {Component} from '@angular/core';
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
export class LoadingComponent {
  protected loadingConfig: LoadingInterface = LoadingConfig;
}
