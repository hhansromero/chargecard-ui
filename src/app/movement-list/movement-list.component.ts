import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import { Movement } from '../model/movement';
import { MovementService } from '../service/movement.service';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit, AfterViewInit {
  displayedColumns = ["id", "recordedAt", "amount", "movementType", "metroCard.number", "card.number"];
  dataSource =  new MatTableDataSource<Movement>();

  @ViewChild(MatPaginator, {static:true} ) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(movementService: MovementService) {
    movementService.getMovementList().subscribe(movements => this.dataSource.data = movements);
    console.log("loading movements!!!");
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
