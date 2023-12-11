import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/service/guide.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  constructor(private guideService: GuideService) { }
  recupGuides: any;

  ngOnInit() {
    this.guideService.getGuide().subscribe((guides: any) => {
      this.recupGuides = Object.values(guides);
      // this.recupGuides = guides;
      console.log(this.recupGuides);
    });
    console.warn(this.recupGuides)
  }
}
