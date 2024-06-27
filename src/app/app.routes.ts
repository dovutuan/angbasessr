import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadChildren: () => import('@modules/test/test.module').then(m => m.TestModule)
  },
];
