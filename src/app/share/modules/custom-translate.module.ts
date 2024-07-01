import {NgModule} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http);
};

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [HttpClient]},
      defaultLanguage: 'en'
    })
  ],
})
export class CustomTranslateModule {
}
