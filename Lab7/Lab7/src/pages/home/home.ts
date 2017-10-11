import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {PhotoViewer} from '@ionic-native/photo-viewer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private googleApiKey: string = 'AIzaSyAfNW7uuzjiuecGWV9GCSB8_Dz9J7nh2N4';
  private query: string = 'Flower';
  private apiUrl: string = 'https://kgsearch.googleapis.com/v1/entities:search?query=';
  private limit: number = 15;
  private secondResponse: any;
  private cxCode: string = '015955127080496721925:9hrkvdcuuuo';
  private customSearchApi: string = 'https://www.googleapis.com/customsearch/v1?cx=' + this.cxCode + '&imgSize=icon&key=' + this.googleApiKey;
  private response: any;
  private docUrl: string = 'https://cimages.prvd.com/is/image/ProvideCommerce/PF_17_R212_MINIMUM_VA0052_W1_SQ?$PFCProductImage$&wid=446';

  constructor(public navCtrl: NavController, private http: HttpClient, public platform: Platform, private document: PhotoViewer) {

  }

  viewImage(){
      console.log(this.docUrl);
      if(this.platform.is('cordova')){
        this.document.show(this.docUrl);

        if(this.docUrl.endsWith('.jpg') || this.docUrl.endsWith('.png') || this.docUrl.endsWith('.bmp')){
            this.document.show(this.docUrl);
        }else{
            console.log('The image cannot be viewed');
        }
      }
  }

  itemTapped(event, item) {
    console.log(item);

    this.customGoogleSearch(item.result.name);
  }

  searchGoogle(): void{
    this.http.get(this.apiUrl + this.query + '&key=' + this.googleApiKey + "&limit=" + this.limit).subscribe(data => {
      console.log(data);
      this.response = data;
      this.response = this.response.itemListElement;
    })
  }

  customGoogleSearch(text): void{
    this.http.get(this.customSearchApi + '&q=' + text).subscribe( data => {
      console.log(data);
      this.secondResponse = data;
      this.secondResponse = this.secondResponse.items;
    })
  }

}
