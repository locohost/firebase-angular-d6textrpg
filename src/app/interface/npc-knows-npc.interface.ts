import { NPC } from './npc.interface';
import { NPCPhrase } from './npc-phrase.interface';

export interface NPCKnowsNPC {
	npc: NPC;
	phrases: NPCPhrase[];
}
