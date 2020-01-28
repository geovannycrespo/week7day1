import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-favmovie',
  templateUrl: './favmovie.component.html',
  styleUrls: ['./favmovie.component.scss']
})
export class FavmovieComponent implements OnInit {

  authorName;
  funFact;
  factList: Array<any> =[];
  constructor() { }

  factCreator = new FormGroup({
    authorName: new FormControl('', Validators.required),
    funFact: new FormControl('', Validators.required)
  })

  showFacts(){
    document.getElementsByTagName('ol')[0].setAttribute('class', 'showFacts')
  }

  //onSumbmit Function For Form
  onSubmit(){
    this.authorName = this.factCreator.value.authorName
    this.funFact = this.factCreator.value.funFact




  if(this.factList == []){
   this.factList = [
     this.funFact,
   ]
 }
  else{
   this.factList.push(this.funFact)
   console.log(this.factList)
 }

 this.factCreator.reset(this.factCreator.value);

}
  ngOnInit() {
  }
}
