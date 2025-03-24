import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  charPos = 0;
  positionIndex = 0;
  fullName = "Alessandro Monetti";
  positions: string[] = [
    "Computer Security University Student",
    "Photographer",
    "Tech Passionate"
  ];
  currentPosition = "";
  positionTransitioning = false;
  positionTimeout = 0;


  ngAfterViewInit(): void {
    setTimeout(() => this.changePosition(), this.positionTimeout); // Start after name animation
    this.typewriterEffect();
  }

  private typewriterEffect() {
    if (this.charPos >= 0 && this.charPos < this.fullName.length) {
      document.getElementById("fullName")!.innerHTML += this.fullName.charAt(this.charPos++);
      setTimeout(() => this.typewriterEffect(), 50);
    }
  }

  private changePosition() {
    if (this.positionTimeout === 0) {
        this.positionTimeout = 3000
    }
    if (this.positionTransitioning) return;

    this.positionTransitioning = true;

    const positionElement = document.getElementById("position")!;
    positionElement.classList.add('slide-out'); // Trigger animation

    setTimeout(() => {
      this.positionIndex = (this.positionIndex + 1) % this.positions.length;
      this.currentPosition = this.positions[this.positionIndex];
      positionElement.classList.remove('slide-out');
      positionElement.classList.add('slide-in');


      setTimeout(() => {
        positionElement.classList.remove('slide-in');
        this.positionTransitioning = false;
        setTimeout(() => this.changePosition(), 3000); // Change every 3 seconds
      }, 500); // Match transition duration

    }, 500); // Match transition duration
  }
}