import { Component, OnInit } from '@angular/core';
import { ProfilePageRoutingModule } from './profile-routing.module';
import {ActivatedRoute}from '@angular/router'
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 ProfileId: string;
 character;




  constructor(
    private activatedRouter: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.ProfileId=this.activatedRouter.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/character/'+ this.ProfileId)
    .subscribe(res => this.character =res);
    


  }

  

}
