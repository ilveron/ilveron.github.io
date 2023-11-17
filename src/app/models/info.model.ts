import {CareerEntry} from "./careerEntry.model";

export interface Info {
  fullName: string
  birthDate: Date
  bio: string
  currentPosition: string,
  career: Array<CareerEntry>
  interests: Array<[string, string]>
  social: Map<string,string>
}
