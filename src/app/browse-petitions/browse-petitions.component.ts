import { Component, OnInit } from '@angular/core';
import { PetitionService  } from '../petition.service'
import { Location } from '@angular/common';
import { Petition } from '../petition.model'
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-petitions',
  templateUrl: './browse-petitions.component.html',
  styleUrls: ['./browse-petitions.component.css'],
  providers: [PetitionService]
})
export class BrowsePetitionsComponent implements OnInit {
  petitions: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private petitionService: PetitionService){}

  ngOnInit(){
    this.petitions = this.petitionService.getPetitions();
  }
  goToDetailPage(clickedPetition){
    this.router.navigate(['petitions', clickedPetition.$key])
  }

}
