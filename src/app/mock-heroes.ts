import { Hero } from './hero';
import { ITEMS } from './mock-items';

export const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice', money: 15, items: [ITEMS[1], ITEMS[0]]},
  { id: 13, name: 'Bombasto', money: 30, items: [ITEMS[1]] },
  { id: 14, name: 'Celeritas', money: 45, items: [ITEMS[1]] },
  { id: 15, name: 'Magneta', money: 0, items: [ITEMS[1]] },
  { id: 16, name: 'RubberMan', money: 1, items: [ITEMS[1]] },
  { id: 17, name: 'Dynama', money: 5, items: [ITEMS[1]] },
  { id: 18, name: 'Dr. IQ', money: 15, items: [ITEMS[1]] },
  { id: 19, name: 'Magma', money: 15, items: [ITEMS[1]]},
  { id: 20, name: 'Tornado', money: 15, items: [ITEMS[1]] }
];