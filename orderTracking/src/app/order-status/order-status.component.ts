import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  constructor() { }

  stages=[
    {stageCount:210, stageName: "Order Management"},
    {stageCount:150, stageName: "Commercial Issues"},
    {stageCount:250, stageName: "Stock Availability"},
    {stageCount:100, stageName: "Warehouse Execution"},
    {stageCount:75, stageName: "In Transit"},
    {stageCount:250, stageName: "Delivered"}
  ]

  ngOnInit() {
  }

}
