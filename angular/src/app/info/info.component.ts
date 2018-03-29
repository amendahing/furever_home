import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
    pet_id: any;
    pet: any;
    name: any;
    age: any;
    description: any;
    city: any;
    sex: any;



    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this._route.params.subscribe( params => {
            this.pet_id = params['id'];
            console.log(params['id'])
        });
        this.retrievePet()
    }

    retrievePet() {
        let observable = this._httpService.retrieveSinglePet(this.pet_id)
        observable.subscribe(data => {
            console.log(data);
            console.log("pet info:", data['petfinder']['pet'])
            console.log("name:", data['petfinder']['pet']['name'])
            this.pet = data['petfinder']['pet']
            this.name = data['petfinder']['pet']['name'];
            this.age = data['petfinder']['pet']['age'];
            this.description = data['petfinder']['pet']['description'];
            this.city = data['petfinder']['pet']['contact']['city'];
            this.name = data['petfinder']['pet']['name'];
            this.name = data['petfinder']['pet']['sex'];
        })
    }

}
