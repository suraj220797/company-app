import { Component, OnInit } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { PhilosophyComponent } from '../philosophy/philosophy.component';
import { SocialComponent } from '../social/social.component';
import { TeamSectionComponent } from '../team-section/team-section.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
