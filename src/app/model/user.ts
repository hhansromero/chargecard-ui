import { MetroCard } from "./metro-card";
import { Passenger } from "./passenger";

export class User {
  id: number;
  username: string;
  password: string;
  passenger: Passenger;
  metroCard: MetroCard;
}
