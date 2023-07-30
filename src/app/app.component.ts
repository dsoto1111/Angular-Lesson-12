import { Component, ViewChild, AfterViewInit, ElementRef, AfterViewChecked, TemplateRef } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { TOKEN } from './config';
import { IdDirective } from './id.directive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterViewChecked {

    @ViewChild(ChildComponent) childClass!: ChildComponent;
    @ViewChild('child') child!: ChildComponent;
    @ViewChild('kid', {read: ElementRef}) kid!: ChildComponent;
    @ViewChild('para') paragraph!: HTMLParagraphElement;
    @ViewChild(TOKEN) aToken!: string;
    @ViewChild(TemplateRef, {static: false}) template!: TemplateRef<any>;
    @ViewChild(ChildComponent, {read: IdDirective}) appChild!: IdDirective

    count() { return 0 };
    getToken() { return '' };
    countValue: number = 0;

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.count = () => { return this.childClass.seconds }
            this.getToken = () => {
                if (this.aToken === undefined) {
                    return '';
                } else {
                    return this.aToken;
                }
            }
        }, 0);
        console.log(this.paragraph);
        console.log(this.template);
        console.log(this.appChild.id);
    }

    ngAfterViewChecked() {
        /*setTimeout(() => {
            this.countValue = this.childClass.seconds;
        } ,0)*/        
    }

    start() {
        this.childClass.start();
    }

    begin() {
        this.child.start();
        console.log(this.child);
    }

    commence() {
        console.log(this.kid);
    }
}
