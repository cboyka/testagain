import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PetitionService  } from '../petition.service'
import { Petition } from '../petition.model'
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-petition-detail',
  templateUrl: './petition-detail.component.html',
  styleUrls: ['./petition-detail.component.css'],
  providers: [PetitionService]
})
export class PetitionDetailComponent implements OnInit {
  petitionId: string;
  petitionToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private petitionService: PetitionService) { }

  // UUse the ngOnInit module to grab petitions from the service and goto a url shows that detauls of a petition
  ngOnInit() {
  this.route.params.forEach((urlParameters) => {
   this.petitionId = urlParameters['id'];
  });
  this.petitionToDisplay = this.petitionService.getPetitionById(this.petitionId)
  }
}
