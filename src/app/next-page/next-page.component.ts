import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-next-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent implements OnInit {

  isEnabled = false;
  isLocked = false;
  isMoving = false;

  noX = 0;
  noY = 0;

  showGlitch = false;
  showFinal = false;

  message = "";

  ngOnInit() {
    setTimeout(() => {
      this.isEnabled = true;
    }, 5000);
  }

  moveNoButton() {
    if (!this.isEnabled || this.isLocked) return;

    this.isMoving = true;

    this.noX = Math.floor(Math.random() * 1400);
    this.noY = Math.floor(Math.random() * 650);
  }

  yesClicked() {
    if (!this.isEnabled) return;

    this.message = "Good Choice 😏";

    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }

    setTimeout(() => {

      this.isLocked = true;
      this.showGlitch = true;

      setTimeout(() => {
        this.showGlitch = false;
        this.showFinal = true;
      }, 6000);

    }, 2000);
  }
}