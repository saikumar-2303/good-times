import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  message = "";

  constructor(private dataService: DataService) {
    this.message = this.dataService.getMessage();
  }

  changeMessage() {
    this.message = "You clicked the button 🎯";
  }

}