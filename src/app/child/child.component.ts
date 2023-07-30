import { Component } from '@angular/core';
import { TOKEN } from '../config';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css'],
    providers: [ {provide: TOKEN, useValue: 'This is a token string'} ]
})
export class ChildComponent {

    seconds: number = 10;
    interval!: number;

    constructor() { }

    start() {
        this.clearTimer();
        this.countdown();
    }

    stop() {
        this.clearTimer();
    }

    clearTimer() {
        clearInterval(this.interval);
    }

    countdown() {
        this.interval = window.setInterval(() => {
            --this.seconds;
            if (this.seconds == -1) {
                this.stop();
                this.seconds = 10;
            }
        }, 1000);
    }
}
