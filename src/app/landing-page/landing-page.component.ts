import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private elementRef: ElementRef, private router: Router, private utilService: UtilsService) { }


  ngOnInit(): void {
  }

  navigate(event: any) {
    this.router.navigateByUrl('/book-session')
  }

}
