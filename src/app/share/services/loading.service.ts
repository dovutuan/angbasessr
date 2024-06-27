import {ApplicationRef, ComponentRef, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {LoadingComponent} from '../components/loading/loading.component';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  private totalShowLoading: number = 0;
  private loadingComponentRef: ComponentRef<LoadingComponent> | null = null;
  private renderer: Renderer2;

  constructor(
    private appRef: ApplicationRef,
    private rendererFactory: RendererFactory2,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public onShow = (): void => {
    if (!this.totalShowLoading) {
      this.onBuildComponentLoading();
    }

    ++this.totalShowLoading;
  };

  public onHide = (): void => {
    if (this.totalShowLoading) {
      --this.totalShowLoading;
      (this.totalShowLoading === 0) && this.onClearComponentLoading();
    }
  };

  private onBuildComponentLoading = (typeCustom = null): void => {
    const loadingComponent = this.renderer.createElement('div', 'loading-component');
    loadingComponent.id = 'cdk-loading';

    this.renderer.appendChild(document.body, loadingComponent);

    this.loadingComponentRef = this.appRef.bootstrap(LoadingComponent, loadingComponent);
    typeCustom && (this.loadingComponentRef.instance.typeCustom = typeCustom);
  };

  private onClearComponentLoading = (): void => {
    if (!this.loadingComponentRef) return;

    const loadingElement = this.loadingComponentRef.location.nativeElement;
    this.renderer.removeChild(document.body, loadingElement);

    this.loadingComponentRef.destroy();
    this.loadingComponentRef = null;
  };
}
