import { CharNPCBase } from './char-npc-base';
import { Player } from './player';

export interface Character extends CharNPCBase {
	player: Player;
	warnings: string[];
	suspended: boolean;
	suspendReason: string;
	timesPlayed: number;
	lastPlayed: Date;
}
