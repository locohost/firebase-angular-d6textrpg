import { CharNPCBase } from './char-npc-base.interface';
import { Player } from './player.interface';

export interface Character extends CharNPCBase {
	player: Player;
	warnings: string[];
	suspended: boolean;
	suspendReason: string;
	timesPlayed: number;
	lastPlayed: Date;
}
