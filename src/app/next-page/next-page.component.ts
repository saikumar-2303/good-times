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

 moveNoButton(event: MouseEvent) {
  if (!this.isEnabled || this.isLocked) return;

  this.isMoving = true;

  const box = (event.target as HTMLElement).parentElement;
  if (!box) return;

  const rect = box.getBoundingClientRect();

  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Move AWAY from cursor
  const offsetX = mouseX < rect.width / 2 ? 300 : -300;
  const offsetY = mouseY < rect.height / 2 ? 200 : -200;

  this.noX = Math.max(0, Math.min(rect.width - 100, mouseX + offsetX));
  this.noY = Math.max(0, Math.min(rect.height - 50, mouseY + offsetY));
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
      }, 10000);

    }, 5000);
  }
}
