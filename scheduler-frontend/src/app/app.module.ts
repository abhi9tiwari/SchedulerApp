// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SchedulerService } from './scheduler.service';

@NgModule({
  declarations: [AppComponent, SchedulerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [SchedulerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
