import { Item } from './item.interface';
import { Character } from './character.interface';
import { Building } from './building.interface';
import { Room } from './room.interface';
import { Node } from './node.interface';

export interface CharItemInventory {
	item: Item;
	qty: number;
	area: Character;
	building: Building;
	room: Room;
	node: Node;
}
