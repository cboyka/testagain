import { Component } from '@angular/core';
import { PetitionService  } from '../petition.service'
import { Location } from '@angular/common';
import { Petition } from '../petition.model'
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-petition',
  templateUrl: './create-petition.component.html',
  styleUrls: ['./create-petition.component.css'],
  providers: [PetitionService]
})
export class CreatePetitionComponent {

  constructor(private petitionService: PetitionService){}

  // Function to take form data from HTML and send it up to the service
  submitForm(title: string, descriiption: string){
  var newPetition: Petition = new Petition(title, descriiption);
  this.petitionService.addPetition(newPetition);
  }
}
