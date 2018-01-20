import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';


import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';
// import { TaskItemComponent } from './task/task-item/task-item.component';
// import { TaskHeaderComponent } from './task/task-header/task-header.component';
import { TaskModule } from "./task/task.module";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    TaskModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
