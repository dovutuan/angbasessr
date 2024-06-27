import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test/test.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {
}
