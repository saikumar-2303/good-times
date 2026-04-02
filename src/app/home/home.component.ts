import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  booleanValue: boolean = true;
  message: string = "";

  x = 0;
  y = 0;

  moveCount = 0; // 👈 track moves
  maxMoves = 5;  // 👈 limit

  constructor(private dataService: DataService,private router: Router) {
    this.message = this.dataService.getMessage();
    
  }

  changeMessage() {
    this.booleanValue = !this.booleanValue;
    this.message = "I said Don't click me! 😠";
    this.router.navigate(['/next-page']);
  }

  moveButton() {

     if (this.moveCount >= this.maxMoves) {
      this.message = "Your are not Listening ok..😴 CLICK";
      return; // 🚫 stop moving
    }
     const maxX = 500; // box width - button width approx
    const maxY = 500; // box height - button height approx
    

  this.x = Math.floor(Math.random() * maxX);
  this.y = Math.floor(Math.random() * maxY);
  this.moveCount++; // 👈 increase count
  }
}