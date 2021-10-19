import {Component, OnInit} from '@angular/core';

declare var LuigiClient: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    show: boolean = true;
    identifier: string = '';
    secret: string = '';

    constructor() {
    }

    ngOnInit(): void {

    }

    login = () => {
        LuigiClient.sendCustomMessage({id: 'overview'});
    }

    showPassword = () => {
        //console.log(this.identifier)
        this.show = true;
    }

}
