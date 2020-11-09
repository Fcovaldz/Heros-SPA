import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private _router: Router) { }

    ngOnInit(): void {

    }

    Search( searchValue ) {
        console.log(searchValue);
        this._router.navigate(['/results', searchValue]);
    }

}