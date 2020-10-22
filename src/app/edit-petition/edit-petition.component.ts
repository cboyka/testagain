import { Component, Input, OnInit } from '@angular/core';
import { PetitionService  } from '../petition.service';
import { Petition } from '../petition.model';;


@Component({
  selector: 'app-edit-petition',
  templateUrl: './edit-petition.component.html',
  styleUrls: ['./edit-petition.component.css'],
  providers: [PetitionService]
})
export class EditPetitionComponent implements OnInit {
  @Input() selectedPetition;

  constructor(private petitionService: PetitionService) {}

  ngOnInit() {
  }

  beginUpdatingPetition(petitionToUpdate){
    this.petitionService.updatePetition(petitionToUpdate);
  }
  beginDeletingPetition(petitionToDelete){
    if(confirm("Are you sure you want to delete this petition?")){
      this.petitionService.deletePetition(petitionToDelete);
    }
  }
}
