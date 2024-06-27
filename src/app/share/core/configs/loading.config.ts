import {LoadingInterface} from '../interfaces/loading.interface';
import {TypeLoadingEnum} from '../enums/loading.enum';

const TypeLoadingConfig: Array<LoadingInterface> = Object.keys(TypeLoadingEnum).map((type: any, index: number) => {
  return {name: type, link: `assets/loadings/${type}.svg`, default: (index === 0)};
});

export {
  TypeLoadingConfig
};
