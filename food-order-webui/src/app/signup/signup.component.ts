import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    constructor() {}

    public name = 'bar';
    public email = 'bar@example.com'
    public password: String = '11';
    public passwordRepeat: String = '11';

    ngOnInit() {}

    onRegister() {
        if (this.password != this.passwordRepeat) {
            return;
        }
    }
}
