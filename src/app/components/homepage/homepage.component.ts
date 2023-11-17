import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  charPos = 0
  fullName = "Alessandro Monetti";



  ngAfterViewInit(): void {
    this.typewriterEffect()
  }

  private typewriterEffect() {
    if(this.charPos >= 0 && this.charPos < this.fullName.length){
      document.getElementById("fullName")!.innerHTML += this.fullName.charAt(this.charPos++);
      setTimeout(() => this.typewriterEffect(), 50)
    }
  }
}
