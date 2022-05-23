import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebComponentLoader {
  loaded = new Set<string>();

  load(url: string): void {
    if (this.loaded.has(url)) {
      return;
    }
    this.loaded.add(url);

    const script = document.createElement('script');
    script.src = url;
    document.head.append(script);
  }
}
