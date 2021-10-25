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
    showError: boolean = false;
    errorMessage:string = "Invalid Credential"
    constructor() {
    }

    ngOnInit(): void {

    }

    login = () => {
        if (this.identifier === 'steve.roger' && this.secret === 'confidential') {
            LuigiClient.sendCustomMessage({id: 'overview'});
        } else {
            this.showError = true;
        }

    }

    showPassword = () => {
        //console.log(this.identifier)
        this.show = true;
    }

}
