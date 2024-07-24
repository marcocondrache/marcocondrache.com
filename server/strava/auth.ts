import "server-only";

import { get } from "@vercel/edge-config";
import { isAfter } from "date-fns";

export interface StravaAuthConfig {
  refreshToken: string;
}

export class StravaAuth {
  client: number;
  secret: string;
  expires_at: Date = new Date(0);
  access_token: string = "";

  constructor() {
    this.client = parseInt(process.env.STRAVA_CLIENT_ID!);
    this.secret = process.env.STRAVA_CLIENT_SECRET!;
  }

  private async refresh() {
    const stravaConfig = (await get("strava")) as StravaAuthConfig;

    const body = {
      grant_type: "refresh_token",
      client_id: this.client,
      client_secret: this.secret,
      refresh_token: stravaConfig.refreshToken,
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
