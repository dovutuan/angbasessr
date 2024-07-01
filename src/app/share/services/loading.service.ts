import {Injectable, Injector} from '@angular/core';
import {LoadingComponent} from '../components/loading/loading.component';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {nodeElement} from '@share/core/configs/loading.config';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  private totalShowLoading: number = 0;
  private overlayRef: OverlayRef | undefined;

  constructor(private overlay: Overlay, private injector: Injector) {
  }

  /**
   * Increment the loading counter and show the loading overlay if it's the first call.
   * If there are no other active loading indicators, it builds and displays the loading overlay.
   */
  public ngOnShow = (): void => {
    if (!this.totalShowLoading) {
      this.ngOnBuild();
    }

    ++this.totalShowLoading;
  };

  /**
   * Decrement the loading counter and hide the loading overlay if no other loading indicators are active.
   * If the loading counter reaches zero, it clears and removes the loading overlay.
   */
  public ngOnHide = (): void => {
    if (this.totalShowLoading) {
      --this.totalShowLoading;
      (this.totalShowLoading === 0) && this.ngOnClear();
    }
  };

  /**
   * Build and display the loading overlay.
   * It also sets tabindex to -1 for all focusable elements
   * to prevent user interaction.
   */
  private ngOnBuild = (): void => {
    this.ngOnSetTabindex();

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });

    const loadingPortal = new ComponentPortal(LoadingComponent, null, this.injector);
    this.overlayRef.attach(loadingPortal);
  };

  /**
   * Clear and remove the loading overlay.
   * It also restores tabindex for all focusable elements
   * to enable user interaction.
   */
  private ngOnClear = (): void => {
    this.ngOnClearTabindex();

    if (this.overlayRef?.hasAttached()) {
      this.overlayRef.detach();
    }
  };

  /**
   * Set tabindex to -1 for all focusable elements to prevent user interaction.
   * This method is used when the loading overlay is displayed.
   */
  private ngOnSetTabindex = (): void => {
    const focusableElements = document.querySelectorAll(`${nodeElement}, [tabindex]:not([tabindex="-1"])`);
    focusableElements.forEach(element => element.setAttribute('tabindex', '-1'));
  };

  /**
   * Restore tabindex for all focusable elements to enable user interaction.
   * This method is used when the loading overlay is removed.
   */
  protected ngOnClearTabindex = (): void => {
    const focusableElements = document.querySelectorAll(`${nodeElement}, [tabindex="-1"]`);
    focusableElements.forEach(element => element.removeAttribute('tabindex'));
  };
}
