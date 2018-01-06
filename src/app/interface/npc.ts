import { CharNPCBase } from './char-npc-base';
import { NPCPhrase } from './npc-phrase';
import { NPCKnowsNPC } from './npc-knows-npc';
import { NPCKnowsChar } from './npc-knows-char';
import { NPCType } from '../enum/all.enum';

export interface NPC extends CharNPCBase {
	type: NPCType;
	unknownPhrases: NPCPhrase[];
	knownNPCs: NPCKnowsNPC[];
	knownChars: NPCKnowsChar[];
}
