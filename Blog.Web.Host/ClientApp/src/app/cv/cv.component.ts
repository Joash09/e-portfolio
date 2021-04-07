import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  pdfSrc = "https://localhost:5001/controller/cv";

  constructor() { }

  ngOnInit() {
  }

}
