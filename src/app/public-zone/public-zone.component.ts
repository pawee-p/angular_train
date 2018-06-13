import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-public-zone',
  templateUrl: './public-zone.component.html',
  styleUrls: ['./public-zone.component.css']
})
export class PublicZoneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLoginPage() {
    this.router.navigate( [ 'login']);
  }

  goToHomePage() {
    this.router.navigate( [ 'home']);
  }

  goToPage(_page: string ) {
    this.router.navigate( [_page]);
  }
}
