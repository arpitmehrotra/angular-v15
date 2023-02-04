import { HttpClient } from '@angular/common/http';
import { Directive, HostListener, NgZone } from '@angular/core';
import { take } from 'rxjs';

@Directive({
  selector: '[appEvent]',
  standalone: true,
})
export class EventDirective {
  private readonly domain = 'my.domain';
  data: any;
  constructor(private http: HttpClient, private ngZone: NgZone) {}

  @HostListener('click')
  onClick(): void {
    if (!this.data) {
      throw new Error('please define the data');
    }
    this.ngZone.runOutsideAngular(() => {
      this.http
        .post(this.domain, {
          user: 'me',
          data: this.data,
        })
        .pipe(take(1))
        .subscribe();
    });
  }
}
