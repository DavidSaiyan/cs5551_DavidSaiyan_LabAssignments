
export class TestHome {

  searchGoogleTest(): void{
    this.httpGoogleKnowledgeMock().subscribe(data => {
      console.log(data);
      if(data.results.itemListElement[0].name == 'something'){
        console.log('Test passed');
      }else{
        console.log('Test Failed');
      }
    })
  }

  httpGoogleKnowledgeMock(): any{
    var data = {
      results: {
        itemListElement:[
          {name: 'something', description: 'something'},
          {name: 'test', description: 'test'}
        ]
      }
    };
    return data;
  }
}
