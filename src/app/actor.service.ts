import { Injectable } from '@angular/core';
import { Actor } from './actor.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Keys } from './api-keys';

@Injectable()
export class ActorService {

  constructor(private http: Http) { }
  getActorDetails(actorID: string){
    return this.http.get("http://api-public.guidebox.com/v2/person/".concat(actorID).concat("/?api_key=").concat(Keys.guidebox))
  }
  getActorCredits(actorTmdbID: string){
    return this.http.get("https://api.themoviedb.org/3/person/".concat(actorTmdbID).concat("/combined_credits?api_key=").concat(Keys.tmdb).concat("&language=en-US"));
  }
}