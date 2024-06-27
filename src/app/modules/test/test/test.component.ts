import {Component} from '@angular/core';
import {LoadingService} from '../../../share/services/loading.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  constructor(private loadingService: LoadingService) {
  }

  onShowLoading = () => {
    this.loadingService.onShow()

    // setTimeout(() =>  this.loadingService.onHide(), 5000)
  };

  onHideLoading = () => {
    this.loadingService.onHide()
  };
}
