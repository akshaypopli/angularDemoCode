import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  constructor() { }

  orderStatus = [
    {statusCount: 120, statusName: 'New Orders'},
    {statusCount: 132, statusName: 'In Process'},
    {statusCount: 405, statusName: 'Shipped'},
    {statusCount: 54, statusName: 'Late'},
    {statusCount: 77, statusName: 'Return'},
  ]
  
  ngOnInit() {
  }

}
