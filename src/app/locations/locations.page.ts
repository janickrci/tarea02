import { Component, OnInit } from '@angular/core';
import { HttpClient}from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  characters = []
  constructor(
    private http: HttpClient,
    private ActivatedRoute: ActivatedRoute

  ) { }
  

  ngOnInit() {
    
    this.http.get<any>('https://rickandmortyapi.com/api/location')
    .subscribe(res => {
      console.log(res)
      this.characters= res.results;
      })
    


  }

}
