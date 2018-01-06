import { CharNPCBase } from './char-npc-base.interface';
import { NPCPhrase } from './npc-phrase.interface';
import { NPCKnowsNPC } from './npc-knows-npc.interface';
import { NPCKnowsChar } from './npc-knows-char.interface';
import { NPCType } from '../enum/all.enum';

export interface NPC extends CharNPCBase {
	type: NPCType;
	unknownPhrases: NPCPhrase[];
	knownNPCs: NPCKnowsNPC[];
	knownChars: NPCKnowsChar[];
}
