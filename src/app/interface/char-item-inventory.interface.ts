import { Item } from './item';
import { Character } from './character';
import { Building } from './building';
import { Room } from './room';
import { Node } from './node';

export interface CharItemInventory {
	item: Item;
	qty: number;
	area: Character;
	building: Building;
	room: Room;
	node: Node;
}
