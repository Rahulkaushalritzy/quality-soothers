import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements AfterViewInit, OnInit {
  constructor(
    private elementRef: ElementRef,
    private router: ActivatedRoute,
    private utilService: UtilsService
  ) {}
  ngAfterViewInit() {}

  isNavbarOpen = false;

  ngOnInit(): void {
    let url = this.router;
  }

  navigate(event: any) {}

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
