import { Component} from '@angular/core';
import { PetitionService } from '../petition.service';
import { Petition } from '../petition.model'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PetitionService]
})
export class AdminComponent {

  constructor(private petitionService: PetitionService) { }

  submitForm(title: string, description: string) {
    var newPetition: Petition = new Petition(title, description);
    this.petitionService.addPetition(newPetition);
  }
}
