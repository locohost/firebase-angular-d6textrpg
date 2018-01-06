import { Character } from './character.interface';
import { NPCPhrase } from './npc-phrase.interface';

export interface NPCKnowsChar {
	char: Character;
	phrases: NPCPhrase[];
}
