import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Angular's HttpClient
import { DeviceInfo } from './analytics.model';
import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private jsonBinUrl = 'https://api.jsonbin.io/v3/b'; // JSONBin endpoint
  private masterKey =
    '$2a$10$RCkzGoJwdAyYIiaP0YL22OU1LqVjP1lZkMY8rB0outbNb6AQSJBAK'; // Replace with the actual key

  constructor(private httpClient: HttpClient) {}

  // Collecting device and browser information
  collectDeviceInfo() {
    // Get the current device info
    const deviceInfo: DeviceInfo = {
      deviceModel: navigator.platform, // Device OS/platform info
      browser: navigator.userAgent, // Browser info
      screenResolution: `${window.innerWidth}x${window.innerHeight}`, // Screen resolution
      language: navigator.language, // Language info
      timestamp: new Date().toISOString(), // Current timestamp
      screenOrientation: screen.orientation
        ? screen.orientation.type
        : 'unknown', // Screen orientation
      batteryStatus: 'unknown', // Battery info (we'll fetch later)
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Timezone info
      cookiesEnabled: document.cookie ? true : false, // Cookies enabled
      referrer: document.referrer, // Referrer info
      cpuCores: navigator.hardwareConcurrency || 'unknown', // CPU cores info
      createdAt: '', // Will be initialized later
      visitCount: 1, // Default visit count
      updatedAt: [], // Initialize the updatedAt array
    };

    // Get existing data from local storage (if any)
    const storedData = this.getStoredData();

    if (storedData) {
      // Data exists: update the updatedAt array and increment visit count
      deviceInfo.createdAt = storedData.createdAt; // Retain the original createdAt
      deviceInfo.updatedAt = [
        ...(storedData.updatedAt ?? []), // Use an empty array if updatedAt is undefined
        new Date().toISOString(),
      ]; // Add new update timestamp
      deviceInfo.visitCount = (storedData.visitCount ?? 0) + 1; // Increment visit count
    } else {
      // Data does not exist: initialize new data
      deviceInfo.createdAt = new Date().toISOString(); // Store first-time created date
      deviceInfo.updatedAt = [deviceInfo.timestamp]; // Initialize updatedAt array
    }

    // Store the updated or new device info in local storage
    this.storeData(deviceInfo);

    // Send data to serverless function
    this.sendDataToJsonBin(deviceInfo);
  }

  // Get stored data from localStorage (if any)
  private getStoredData(): DeviceInfo | null {
    const data = localStorage.getItem('deviceInfo');
    return data ? JSON.parse(data) : null;
  }

  // Store updated device info in localStorage
  private storeData(data: DeviceInfo): void {
    localStorage.setItem('deviceInfo', JSON.stringify(data));
  }

  // Send data to JSONBin directly
  public sendDataToJsonBin(deviceInfo: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Master-Key': this.masterKey, // Send the hashed key securely
    });

    return this.httpClient.post(this.jsonBinUrl, deviceInfo, { headers });
  }
}
