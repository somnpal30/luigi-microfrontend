import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  xss:string|null ='';

  constructor() {
  }

  ngOnInit(): void {
  }

  showXSS = () => {
    this.xss = sessionStorage.getItem('key') ;
  }
}
