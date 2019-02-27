import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateY(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateY(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateY(100%)', opacity: 0 }))
        ])
      ]
    )
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular load data from JSON';

  constructor(private httpService: HttpClient) { }
  arrBirds: string[];

  show;
  buttonName;

  toggle(index) {
    this.show[index] = !this.show[index];

    if (this.show[index]) {
      this.buttonName[index] = "Hide";
    }
    else {
      this.buttonName[index] = "Show";
    }
  }

  fillArray(len) {
    this.show = new Array<boolean>(len);
    this.buttonName = new Array<string>(len);
    for (var i = 0; i < len; i++) {
      this.show[i] = true;
      this.buttonName[i] = "Hide";
    }
  }

  ngOnInit() {
    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.arrBirds = data as string[];	 // FILL THE ARRAY WITH DATA.
        console.log(this.arrBirds[1]);

        this.fillArray(this.arrBirds.length);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
