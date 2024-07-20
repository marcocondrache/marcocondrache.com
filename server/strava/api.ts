import { StravaAuth } from "./auth";

export class StravaApi {
  constructor(private auth: StravaAuth) {
    this.auth = auth;
  }

  private async request(url: string, options?: RequestInit) {
    const token = await this.auth.token();

    return (
      await fetch(url, {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        ...options,
      })
    ).json();
  }

  async getActivities() {
    return this.request(`https://www.strava.com/api/v3/athlete/activities`);
  }
}
