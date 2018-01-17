import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { MdSidenavModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';
import { TaskItemComponent } from './task/task-item/task-item.component';
import { TaskHeaderComponent } from './task/task-header/task-header.component';
import { TaskModule } from "./task/task.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MdSidenavModule,
    LoginModule,
    AppRoutingModule,
    ProjectModule,
    TaskModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
