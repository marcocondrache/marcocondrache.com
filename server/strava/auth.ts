import { isAfter } from "@formkit/tempo";

export interface StravaAuthConfig {
  client_id: string;
  client_secret: string;
  refresh_token: string;
}

export class StravaAuth {
  expires_at: Date = new Date(0);
  access_token: string = "";

  constructor(private auth: StravaAuthConfig) {
    this.auth = auth;
  }

  private async refresh() {
    const body = {
      grant_type: "refresh_token",
      refresh_token: this.auth.refresh_token,
      client_id: parseInt(this.auth.client_id),
      client_secret: this.auth.client_secret,
    };

    const response = await fetch("https://www.strava.com/oauth/token", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();

    this.access_token = data.access_token;
    this.expires_at = new Date(Date.now() + data.expires_in * 1000);
  }

  expired() {
    return isAfter(new Date(), this.expires_at);
  }

  async token() {
    if (this.expired()) await this.refresh();

    return this.access_token;
  }
}
