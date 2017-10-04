import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private googleApiKey: string = 'AIzaSyAfNW7uuzjiuecGWV9GCSB8_Dz9J7nh2N4';
  private query: string = 'Boogy';
  private apiUrl: string = 'https://kgsearch.googleapis.com/v1/entities:search?query=';
  private limit: number = 15;
  private secondResponse: any;
  private cxCode: string = '015955127080496721925:9hrkvdcuuuo';
  private customSearchApi: string = 'https://www.googleapis.com/customsearch/v1?cx=' + this.cxCode + '&imgSize=icon&key=' + this.googleApiKey;
  private response: any;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    //nothing here;
  }


  itemTapped(event, item) {
    console.log(item);
    this.imageSearch(item.result.name);
  }

  searchGoogle(): void{
    this.http.get(this.apiUrl + this.query + '&key=' + this.googleApiKey + "&limit=" + this.limit).subscribe(data => {
      console.log(data);
      this.response = data;
      this.response = this.response.itemListElement;
    })
  }

  imageSearch(text): void{
    this.http.get(this.customSearchApi + '&q=' + text).subscribe( data => {
      console.log(data);
      this.secondResponse = data;
      this.secondResponse = this.secondResponse.items;
    })
  }

}
