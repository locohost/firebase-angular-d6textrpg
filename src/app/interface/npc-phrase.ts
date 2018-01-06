import { CharReputation } from '../enum/all.enum';

export interface NPCPhrase {
	phrase: string;
	emotion: CharReputation; // Say these phrases if NPC has this emotion about NPC/Char
	triggerWords: string[]; // Words player may say (enter) that will trigger this response
}
