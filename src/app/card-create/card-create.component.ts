import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CardService} from "../service/card.service";
import {Card} from "../model/card";

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {
  card: Card = new Card();

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.card.passengerId = 5;

    this.cardService.createCard(this.card).subscribe(
      data => this.router.navigate(['/card-list'])
    );
  }

  cancel() {
    this.router.navigate(['/home'])
  }
}
