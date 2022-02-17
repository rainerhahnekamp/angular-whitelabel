import { Observable } from 'rxjs';

export class Config {
  constructor(
    public title: string,
    public appCode: string,
    public baseUrl: string,
    public authenticationUrl: string,
    // public locale: Observable<"de" | "en">,
    public featureToggles: {
      customerEnabled: boolean;
      diaryEnabled: boolean;
      holidaysEnabled: boolean;
    }
  ) {}
}
