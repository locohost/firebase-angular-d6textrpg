import { NPC } from './npc';
import { NPCPhrase } from './npc-phrase';

export interface NPCKnowsNPC {
	npc: NPC;
	phrases: NPCPhrase[];
}
