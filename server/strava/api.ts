import "server-only";

import { Activity } from "@/types/strava";

import { StravaAuth } from "./auth";

export class StravaApi {
  constructor(private auth: StravaAuth) {
    this.auth = auth;
  }

  private async request<T>(url: string, options?: RequestInit): Promise<T> {
    const token = await this.auth.token();
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      ...options,
    });

    return await response.json();
  }

  preloadActivities() {
    void this.getActivities();
  }

  async getActivities() {
    return this.request<Activity[]>(
      `https://www.strava.com/api/v3/athlete/activities`,
      { next: { tags: ["stravaActivities"], revalidate: 3600 } }
    );
  }
}
