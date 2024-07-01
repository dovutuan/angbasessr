import {Injectable, Injector} from '@angular/core';
import {LoadingComponent} from '../components/loading/loading.component';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  private totalShowLoading: number = 0;
  private overlayRef: OverlayRef | undefined;

  constructor(private overlay: Overlay, private injector: Injector) {
  }

  public ngOnShow = (): void => {
    if (!this.totalShowLoading) {
      this.ngOnBuild();
    }

    ++this.totalShowLoading;
  };

  public ngOnHide = (): void => {
    if (this.totalShowLoading) {
      --this.totalShowLoading;
      (this.totalShowLoading === 0) && this.ngOnClear();
    }
  };

  private ngOnBuild = (): void => {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });

    const loadingPortal = new ComponentPortal(LoadingComponent, null, this.injector);
    this.overlayRef.attach(loadingPortal);
  };

  private ngOnClear = (): void => {
    if (this.overlayRef?.hasAttached()) {
      this.overlayRef.detach();
    }
  };
}
