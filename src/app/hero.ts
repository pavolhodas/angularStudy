import { Items } from "./items";

export interface Hero {
    id: number;
    name: string;
    money: number;
    items: Items[];
  }