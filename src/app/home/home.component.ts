import { Component } from '@angular/core';
import { PetitionService  } from '../petition.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PetitionService]
})
export class HomeComponent {
  // variable for the homepages title
    homeTitle = 'The world\'s platform for change';
}
