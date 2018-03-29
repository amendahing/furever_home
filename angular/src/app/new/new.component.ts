import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})


export class NewComponent implements OnInit {
    pet_type: any;
    zipcode: any;

    constructor(
        private _http: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
      // this.getRandom()
    }

    retrievePets() {
      // console.log(this.pet_type)
      // console.log(this.zipcode)
      this._router.navigate(['all_pets/'+ this.pet_type + '/' + this.zipcode]);
    }


  }




  // getRandom() {
  //     let observable = this._http.getRandom()
  //     observable.subscribe(data => {
  //         console.log("Random Pet:", data)
  //         console.log("Pet info:", data['petfinder']['pet'])
  //         console.log("Name:", data['petfinder']['pet']['name'].$t)
  //         this.pet = data['petfinder']['pet']
  //         this.name = data['petfinder']['pet']['name'].st
  //     })
