// src/app/scheduler.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  private apiUrl = 'http://localhost:3000';

  // Add a new event
  async addEvent(start_time: number, end_time: number): Promise<boolean> {
    try {
      const response = await axios.post(`${this.apiUrl}/addEvent`, { start_time, end_time });
      return response.data.success;
    } catch (error) {
      console.error("Error adding event", error);
      return false;
    }
  }

  // Get all scheduled events
  async getEvents(): Promise<{ start_time: number, end_time: number }[]> {
    try {
      const response = await axios.get(`${this.apiUrl}/getEvents`);
      return response.data;
    } catch (error) {
      console.error("Error fetching events", error);
      return [];
    }
  }
}
