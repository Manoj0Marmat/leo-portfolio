export interface DeviceInfo {
  deviceModel: string; // Device OS/platform info
  browser: string; // Browser info
  screenResolution: string; // Screen resolution
  language: string; // Language info
  timestamp: string; // Current timestamp
  screenOrientation: string; // Screen orientation
  batteryStatus: string; // Battery info (charging or not)
  timezone: string; // Timezone info
  cookiesEnabled: boolean; // Whether cookies are enabled
  referrer: string; // Referrer info (previous page)
  cpuCores: string | number; // Number of CPU cores
  visitCount: number; // The number of times the user has visited
  createdAt: string; // First time created date
  updatedAt: string[]; // Array of timestamps when the data was updated
}
