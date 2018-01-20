import {NgModule, SkipSelf, Optional, EventEmitter, Output} from '@angular/core';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import 'rxjs/add/operator/take'

@NgModule({
  imports: [
    HttpModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [
    HeaderComponent, FooterComponent, SidebarComponent,AppRoutingModule,BrowserAnimationsModule
  ]
})
export class CoreModule {



  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('模块已经存在,不能再次加载');
    }
  }


}
