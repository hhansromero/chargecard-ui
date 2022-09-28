import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CardService} from "../service/card.service";
import {MatTableDataSource} from "@angular/material/table";
import {Card} from "../model/card";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, AfterViewInit {
  displayedColumns = ["id", "number", "expiration", "cvv", "cardHolder"];
  dataSource =  new MatTableDataSource<Card>();

  @ViewChild(MatPaginator, {static:true} ) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(cardService: CardService) {
    cardService.getCardsByPassenger(5).subscribe(cards => this.dataSource.data = cards);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
