import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor( private router: Router, private utilService: UtilsService) { }

  title = 'quality-soothers';
  ngOnInit(): void {}
}
