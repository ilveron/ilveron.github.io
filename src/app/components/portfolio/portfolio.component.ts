import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {Project} from "../../models/project.model";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  university!: Array<Project>
  school!: Array<Project>
  personal!: Array<Project>

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.university = new Array<Project>()
    this.school = new Array<Project>()
    this.personal = new Array<Project>()

    this.requestService.getPortfolio().subscribe({
      next: (response: any) => {
        this.university = response.university
        this.school = response.school
        this.personal = response.personal

        console.log(response)
      },
      error: () => {alert("ERROR: Couldn't retrieve the necessary data")}
    })
  }

}
