import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
declare var google: any;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})


export class InfoComponent implements OnInit {
    pet_id: any;
    pet: any;
    city: any;
    lat: number;
    lng: number;


    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this._route.params.subscribe( params => {
            this.pet_id = params['id'];
            // console.log(params['id'])
        });
        this.retrievePet();

        // this.retrieveCoordinates();
    }


    retrievePet() {
        let observable = this._httpService.retrieveSinglePet(this.pet_id)
        observable.subscribe(data => {
            // console.log(data);
            // console.log("pet info:", data['petfinder']['pet'])
            this.pet = data['petfinder']['pet']
            this.city = data['petfinder']['pet']['contact']['city']
            this.city = this.city.$t
            console.log(`City: ${this.city}`)

            this.retrieveCoordinates()
        })

    }

    retrieveCoordinates() {
        let observable = this._httpService.getCoordinates(this.city)
        observable.subscribe(data => {
            // console.log("++++++ Retrieving coordinates +++++++")
            console.log(data['results'][0]['geometry']['location']);
            this.lat = data['results'][0]['geometry']['location']['lat']
            this.lng = data['results'][0]['geometry']['location']['lng']

        })
    }


}
