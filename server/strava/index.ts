import { StravaApi } from "./api";
import { StravaAuth } from "./auth";

export const auth = new StravaAuth({
  client_id: process.env.STRAVA_CLIENT_ID!,
  client_secret: process.env.STRAVA_CLIENT_SECRET!,
  refresh_token: process.env.STRAVA_REFRESH_TOKEN!,
});

export const api = new StravaApi(auth);
