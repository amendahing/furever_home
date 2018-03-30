import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Response, Jsonp} from "@angular/http";
import {Observable} from 'rxjs/Rx';
// import {'rxjs/add/operator/map'}

@Injectable()
export class HttpService {
    privatekey = '14614b2ec6590088e2c02f050810225b';

    constructor(
        private _http: HttpClient,
        private jsonp: Jsonp
    ) { }

    private url = "http://api.petfinder.com/pet.getRandom?key=14614b2ec6590088e2c02f050810225b&animal=dog&location=94580&output=basic&format=json&callback=JSONP_CALLBACK"

    getRandom() {
        // const url = "";
        // var animal = "cat";
        // var zipcode = 94580
        return this.jsonp.get(this.url)
        .map(function(res: Response){
           return res.json() || {};
        }).catch(function(error: any){return Observable.throw(error);
       });

    }

    retrievePets(pet_type, zipcode) {
        var retrieveURL = "http://api.petfinder.com/pet.find?key=14614b2ec6590088e2c02f050810225b&location="+ zipcode +"&animal="+ pet_type +"&format=json&callback=JSONP_CALLBACK"
        return this.jsonp.get(retrieveURL)
        .map(function(res: Response){
           return res.json() || {};
        }).catch(function(error: any){return Observable.throw(error);
       });
    }

    retrieveSinglePet(id) {
        var url = "http://api.petfinder.com/pet.get?key=14614b2ec6590088e2c02f050810225b&id="+ id +"&format=json&callback=JSONP_CALLBACK";
        return this.jsonp.get(url)
        .map(function(res: Response){
           return res.json() || {};
        }).catch(function(error: any){return Observable.throw(error);
       });
    }

    getDogBreed() {
        var url = "http://api.petfinder.com/breed.list?key=14614b2ec6590088e2c02f050810225b&animal=dog&output=basic&format=json&callback=JSONP_CALLBACK"
        return this.jsonp.get(url)
        .map(function(res: Response){
           return res.json() || {};
        }).catch(function(error: any){return Observable.throw(error);
       });
    }





}

        // return this.jsonp.get("http://api.petfinder.com/pet.getRandom?key="+ this.privatekey +"&animal="+ animal +"&location="+ zipcode +"&output=basic&format=json&callback=JSONP_CALLBACK")

// api.petfinder.com/pet.getRandom?key=14614b2ec6590088e2c02f050810225b&animal=cat&location=94580&output=basic&format=json
