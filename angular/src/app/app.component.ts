import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        zipcode: any;
        pet_type: any;
        pets: any;
        pet_id: any;

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
    }

    petDetail(id) {
        // console.log(id)
        this._router.navigate(['pet_info/'+id]);
    }

}









// retrievePets() {
//     let observable = this._httpService.retrievePets()
//     observable.subscribe(data => {
//         // console.log(data);
//         this.pets = data['petfinder']['pets']['pet'];
//         console.log("List of pets", data['petfinder']['pets']['pet'])
//         // console.log("First pet", data['petfinder']['pets']['pet'][0]['name'].$t)
//     })
// }
