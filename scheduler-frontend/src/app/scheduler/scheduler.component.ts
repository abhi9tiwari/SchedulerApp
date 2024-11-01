// src/app/scheduler/scheduler.component.ts
import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../scheduler.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  events: { start_time: number; end_time: number }[] = [];
  start_time: number = 0;
  end_time: number = 0;
  message: string = '';

  constructor(private schedulerService: SchedulerService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  async loadEvents() {
    this.events = await this.schedulerService.getEvents();
  }

  async addEvent() {
    // Validate that start_time and end_time are within the 0-24 range
    if (this.start_time < 0 || this.start_time > 24 || this.end_time < 0 || this.end_time > 24) {
      this.message = 'Start and end times must be between 0 and 24.';
      return;
    }

    // Ensure start_time is before end_time
    if (this.start_time >= this.end_time) {
      this.message = 'End time must be after start time.';
      return;
    }

    const success = await this.schedulerService.addEvent(this.start_time, this.end_time);
    if (success) {
      this.message = 'Event added successfully.';
      this.loadEvents();
    } else {
      this.message = 'Event overlaps with existing events.';
    }
  }
}
