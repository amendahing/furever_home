import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})

export class AllComponent implements OnInit {
    zipcode: any;
    pet_type: any;
    pets: any;
    pet_id: any;


    new_zipcode: any;
    new_pet_type: any;s


    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

  ngOnInit() {
        this._route.params.subscribe( params => {
            this.pet_type = params['pet_type'];
            this.zipcode = params['zipcode'];
            // console.log(params['pet_type'])
            // console.log(params['zipcode'])
            this.retrievePets();
        });
  }

  retrievePets() {
      let observable = this._httpService.retrievePets(this.pet_type, this.zipcode)
      observable.subscribe(data => {
          console.log(data);
          this.pets = data['petfinder']['pets']['pet'];
          console.log(data['petfinder']['pets']['pet'][0]['breeds']['breed'])
          // this.breeds = data['petfinder']['pets']['pet']['breeds']['breed']
          // console.log("List of pets", data['petfinder']['pets']['pet'])
          // console.log("First pet", data['petfinder']['pets']['pet'][0]['name'].$t)
      })
  }

  petDetail(id) {
      // console.log(id)
      this._router.navigate(['pet_info/'+id]);
  }

}














// newRetrieval() {
//     let observable = this._httpService.retrievePets(this.new_pet_type, this.new_zipcode)
//     observable.subscribe(data => {
//         console.log(data);
//         this.pets = data['petfinder']['pets']['pet'];
//         // console.log("List of pets", data['petfinder']['pets']['pet'])
//         // console.log("First pet", data['petfinder']['pets']['pet'][0]['name'].$t)
//     })
// }
