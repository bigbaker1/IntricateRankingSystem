import { NgModule } from '@angular/core';

import { IntricateRankingSystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [IntricateRankingSystemSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [IntricateRankingSystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class IntricateRankingSystemSharedCommonModule {}
