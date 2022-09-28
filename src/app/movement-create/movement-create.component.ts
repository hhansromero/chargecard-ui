import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movement } from '../model/movement';
import { MetroCard } from '../model/metro-card';
import { Card } from '../model/card';
import { MovementService } from '../service/movement.service';
import {CardService} from "../service/card.service";

interface MovementType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-movement-create',
  templateUrl: './movement-create.component.html',
  styleUrls: ['./movement-create.component.css']
})
export class MovementCreateComponent implements OnInit {
  movement: Movement = new Movement();
  metroCard: MetroCard = new MetroCard();
  card: Card = new Card();

  passengerId: number;

  foods: MovementType[] = [
    {value: 'CHARGE', viewValue: 'Charge'},
    {value: 'EXPENSE', viewValue: 'Expense'}
  ];

  cards: Card[] = [];

  constructor(private movementService: MovementService,
              private cardService: CardService,
              private router: Router) { }

  ngOnInit(): void {
    console.log("on init")
    this.getCards();
  }

  save() {
    this.metroCard.id = 2;
    this.card.id = this.movement.cardId; // getting the cardId from the model for posting it

    this.movement.metroCard = this.metroCard;
    this.movement.card = this.card;
    console.log(this.movement);

    this.movementService.createMovement(this.movement).subscribe(
      data => this.router.navigate(['/movement-list'])
    );
 }

 getCards() {
   this.passengerId = 5;
   this.cardService.getCardsByPassenger(this.passengerId).subscribe(cards => this.cards = cards);
 }

  cancel() {
    this.router.navigate(['/home'])
  }
}
