import { Component, OnInit } from '@angular/core';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  faHandPointLeft = faHandPointLeft;
  
  constructor() { }

  ngOnInit() {
  }

}
