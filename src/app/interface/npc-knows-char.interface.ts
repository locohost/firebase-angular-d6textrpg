import { Character } from './character';
import { NPCPhrase } from './npc-phrase';

export interface NPCKnowsChar {
	char: Character;
	phrases: NPCPhrase[];
}
