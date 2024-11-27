import { Card } from "./card";
import { MetroCard } from "./metro-card";

export class Movement {
  id: number;
  recordedAt: string;
  amount: number;
  movementType: string;
  metroCard: MetroCard;
  card: Card;
  cardId: number;
}
