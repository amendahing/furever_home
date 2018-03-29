import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})


export class RandomComponent implements OnInit {
    pet: any;
    name: any;

    constructor(
        private _http: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

  ngOnInit() {
      this.getRandom()
  }

    getRandom() {
        let observable = this._http.getRandom()
        observable.subscribe(data => {
            // console.log("Random Pet:", data)
            // console.log("Pet info:", data['petfinder']['pet'])
            // console.log("Name:", data['petfinder']['pet']['name'].$t)
            this.pet = data['petfinder']['pet']
            this.name = data['petfinder']['pet']['name'].st
        })

    }

  }
