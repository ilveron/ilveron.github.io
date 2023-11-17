import {Component, OnInit} from '@angular/core';
import {Info} from "../../models/info.model";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  me!: Info
  constructor(private requestService: RequestService) {}
  ngOnInit(): void {
    this.requestService.getInfo().subscribe({
      next: (value: any) => {
        this.me = {
          fullName: value.fullName,
          birthDate: value.birthDate,
          bio: value.bio,
          currentPosition: value.currentPosition,
          career: value.career,
          interests: value.interests,
          social: new Map<string, string>()
        }

        console.log(this.me)

        // Create social map
        for(let key of Object.keys((value.social as Map<string,string>)))
          this.me.social.set(key, value.social[key])
      }
    })

    this.setMailTo()
  }

  protected setMailTo(): void {
    const data = "YWxlc3NhbmRyb21vbmV0dGlAb3V0bG9vay5pdA=="
    const a = document.getElementById('email')
    a!.setAttribute("href", "mailto:".concat(atob(data)))
  }
}
