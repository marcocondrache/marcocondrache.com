import { StravaApi } from "./api";
import { StravaAuth } from "./auth";

export const auth = new StravaAuth();

export const api = new StravaApi(auth);
