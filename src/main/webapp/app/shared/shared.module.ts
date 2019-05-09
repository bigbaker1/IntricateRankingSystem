import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IntricateRankingSystemSharedLibsModule,
  IntricateRankingSystemSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [IntricateRankingSystemSharedLibsModule, IntricateRankingSystemSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [IntricateRankingSystemSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntricateRankingSystemSharedModule {
  static forRoot() {
    return {
      ngModule: IntricateRankingSystemSharedModule
    };
  }
}
