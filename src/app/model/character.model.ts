import { Base } from './base.model';
import { Player } from './player.model';
import { Node } from './node.model';
import { Room } from './room.model';
import { Building } from './building.model';
import { Region } from './region.model';
import { Effect } from './effect.model';
import { Item } from './item.model';
import {
	Facing, NPCType,
	CharNPCAlign, CharNPCClass, CharNPCLang, CharNPCRace, CharNPCSize, CharReputation
} from '../enum/all.enum';

export class CharRepBuilding {
	building: Building;
	rep: CharReputation;

	constructor(data) {
		this.building = data.building;
		this.rep = data.rep;
	}
}

export class CharRepArea {
	area: Character;
	rep: CharReputation;

	constructor(data) {
		this.area = data.area;
		this.rep = data.rep;
	}
}

export class CharRepRegion {
	region: Region;
	rep: CharReputation;

	constructor(data) {
		this.region = data.region;
		this.rep = data.rep;
	}
}

export class CharItemCarrying {
	item: Item;
	qty: number;
	location: string;

	constructor(data) {
		this.item = data.item;
		this.qty = data.qty;
		this.location = data.location;
	}
}

export class CharItemInventory {
	item: Item;
	qty: number;
	area: Character;
	building: Building;
	room: Room;
	node: Node;

	constructor(data) {
		this.item = data.item;
		this.qty = data.qty;
		this.area = data.area;
		this.building = data.building;
		this.node = data.node;
	}
}

// Both NPC and Character extend this class
export abstract class CharNPCBase extends Base {
	location: Node;
	facing: Facing;
	alignment: CharNPCAlign;
	classes: CharNPCClass[];
	languages: CharNPCLang[];
	appearance: {
		summary: {
			close: string;		// 0 - 4 nodes
			near: string;		// 5 - 14 nodes
			far: string; 		// 15 - 24 nodes
			veryFar: string;	// 25+ nodes
		};
		race: CharNPCRace[];
		size: CharNPCSize;
		face: string;
		body: string;
		clothing: string;
		weapons: string;
		armor: string;
		equipment: string;
	};
	reputation: {
		regions: CharRepRegion[];
		areas: CharRepArea[];
		buildings: CharRepBuilding[];
	};
	stat: {
		str: number;
		int: number;
		wis: number;
		con: number;
		dex: number;
		cha: number;
		speed: number;
		vision: number;
		hearing: number;
		smell: number;
		hitPts: number;
		experiencePts: number;
		level: number;
	};
	effects: Effect[];
	items: {
		carrying: CharItemCarrying[];
		inventory: CharItemInventory[];
	};
	knowledge: string[];
	notes: string;

	constructor(data = null) {
		super(data);
		this.location = (data && data.location || null);
		this.facing = (data && data.facing || Facing.North);
		this.alignment = (data && data.alignment || CharNPCAlign.Neutral);
		this.classes = (data && data.classes || [CharNPCClass.Fighter]);
		this.languages = (data && data.languages || [CharNPCLang.Common]);

		this.appearance.summary.close =
			(data && data.appearance && data.appearance.summary && data.appearance.summary.close
				? data.appearance.summary.close : '');
		this.appearance.summary.near =
			(data && data.appearance && data.appearance.summary && data.appearance.summary.near
				? data.appearance.summary.near : '');
		this.appearance.summary.far =
			(data && data.appearance && data.appearance.summary && data.appearance.summary.far
				? data.appearance.summary.far : '');
		this.appearance.summary.veryFar =
			(data && data.appearance && data.appearance.summary && data.appearance.summary.veryFar
				? data.appearance.summary.veryFar : '');
		this.appearance.race = (data && data.appearance && data.appearance.race
			? data.appearance.race : [CharNPCRace.Human]);
		this.appearance.size = (data && data.appearance && data.appearance.size
			? data.appearance.size : CharNPCSize.Man_Size);
		this.appearance.face = (data && data.appearance && data.appearance.face
			? data.appearance.face : '');
		this.appearance.body = (data && data.appearance && data.appearance.body
			? data.appearance.body : '');
		this.appearance.clothing = (data && data.appearance && data.appearance.clothing
			? data.appearance.clothing : '');
		this.appearance.weapons = (data && data.appearance && data.appearance.weapons
			? data.appearance.weapons : '');
		this.appearance.armor = (data && data.appearance && data.appearance.armor
			? data.appearance.armor : '');
		this.appearance.equipment = (data && data.appearance && data.appearance.equipment
			? data.appearance.equipment : '');

		this.reputation.regions = (data && data.reputation && data.reputation.regions
			? data.reputation.regions : []);
		this.reputation.areas = (data && data.reputation && data.reputation.areas
			? data.reputation.areas : []);
		this.reputation.buildings = (data && data.reputation && data.reputation.buildings
			? data.reputation.buildings : []);

		this.stat.str = (data && data.stat && data.stat.str ? data.stat.str : 0);
		this.stat.int = (data && data.stat && data.stat.int ? data.stat.int : 0);
		this.stat.wis = (data && data.stat && data.stat.wis ? data.stat.wis : 0);
		this.stat.con = (data && data.stat && data.stat.con ? data.stat.con : 0);
		this.stat.dex = (data && data.stat && data.stat.dex ? data.stat.dex : 0);
		this.stat.cha = (data && data.stat && data.stat.cha ? data.stat.cha : 0);
		this.stat.speed = (data && data.stat && data.stat.speed ? data.stat.speed : 0);
		this.stat.vision = (data && data.stat && data.stat.vision ? data.stat.vision : 0);
		this.stat.hearing = (data && data.stat && data.stat.hearing ? data.stat.hearing : 0);
		this.stat.smell = (data && data.stat && data.stat.smell ? data.stat.smell : 0);
		this.stat.hitPts = (data && data.stat && data.stat.hitPts ? data.stat.hitPts : 0);
		this.stat.experiencePts = (data && data.stat && data.stat.experiencePts
			? data.stat.experiencePts : 0);
		this.stat.level = (data && data.stat && data.stat.level ? data.stat.level : 0);

		this.items.carrying = (data && data.items && data.items.carrying ? data.items.carrying : []);
		this.items.inventory = (data && data.items && data.items.inventory ? data.items.inventory : []);
		this.effects = (data && data.effects || []);
		this.knowledge = (data && data.knowledge || []);
		this.notes = (data && data.notes || '');
	}

	static appearanceToCharacter(char: CharNPCBase, charLooking: CharNPCBase): string {
		return char.appearance.summary.near;
		// TODO: Add code to calculate distance betwee char and charLooking

	}

	static validate(model: CharNPCBase) {
		const errors: string[] = [];
		if (model.name.length < 3) { errors.push('Character.name must be at least 3 chars'); }
		if (model.description.length < 10) { errors.push('Character.description must be at least 10 chars'); }
		// TODO: Look for any other Char with same name, do not allow

		return errors;
	}

	static create(model: CharNPCBase): string[] {
		// Add code to create and save here...
		return Character.validate(model);
	}

	static readById(id: string): CharNPCBase {
		const char = new Character({});
		return char;
	}

	static update(model: CharNPCBase): string[] {
		// Add code to update and save here...
		return Character.validate(model);
	}

	static delete(id: string) {
		// Add code to mark deleted here...
	}

	docify() {
		const doc = super.docify();
		doc.location = this.location;
		doc.facing = this.facing;
		doc.alignment = this.alignment;
		doc.classes = this.classes;
		doc.languages = this.languages;
		doc.appearance = {
			summary: {
				close: this.appearance.summary.close,
				near: this.appearance.summary.close,
				far: this.appearance.summary.close,
				veryFar: this.appearance.summary.close
			},
			race: this.appearance.race,
			size: this.appearance.size,
			face: this.appearance.face,
			body: this.appearance.body,
			clothing: this.appearance.clothing,
			weapons: this.appearance.weapons,
			armor: this.appearance.armor,
			equipment: this.appearance.equipment,
		};
		doc.reputation = {
			regions: this.reputation.regions,
			areas: this.reputation.areas,
			buildings: this.reputation.buildings
		};
		doc.stat = {
			str: this.stat.str,
			int: this.stat.int,
			wis: this.stat.wis,
			con: this.stat.con,
			dex: this.stat.dex,
			cha: this.stat.cha,
			speed: this.stat.speed,
			vision: this.stat.vision,
			hearing: this.stat.hearing,
			smell: this.stat.smell,
			hitPts: this.stat.hitPts,
			experiencePts: this.stat.experiencePts,
			level: this.stat.level
		};
		doc.effects = this.effects;
		doc.items = {
			carrying: this.items.carrying,
			inventory: this.items.inventory
		};
		doc.knowledge = this.knowledge;
		doc.notes = this.notes;
		return doc;
	}

} // end class CharNPCBase

export class NPCPhrase {
	phrase: string;
	emotion: CharReputation; // Say these phrases if NPC has this emotion about NPC/Char
	triggerWords: string[]; // Words player may say (enter) that will trigger this response

	constructor(data) {
		this.phrase = data.phrase;
		this.emotion = (data.emotion || CharReputation.Unknown);
		this.triggerWords = (data.triggerWords || []);
	}

	docify(): any {
		return {
			'phrase': this.phrase,
			'emotion': this.emotion,
			'triggerWords': this.triggerWords
		};
	}

} // end class NPCPhrase

export class NPCKnowsNPC {
	npc: NPC;
	phrases: NPCPhrase[];

	constructor(data) {
		this.npc = data.npc;
		this.phrases = (data.phrases || []);
	}

	docify(): any {
		const phrases: string[] = [];
		this.phrases.forEach(phrase => {
			phrases.push(phrase.docify());
		});
		return {
			'npcUID': this.npc.uid,
			'npcName': this.npc.name,
			'phrases': phrases
		};
	}

} // end class NPCKnowsNPC

export class NPCKnowsChar {
	char: Character;
	phrases: NPCPhrase[];

	constructor(data) {
		this.char = data.char;
		this.phrases = (data.phrases || []);
	}

	docify(): any {
		const phrases: string[] = [];
		this.phrases.forEach(phrase => {
			phrases.push(phrase.docify());
		});
		return {
			'charUID': this.char.uid,
			'charName': this.char.name,
			'phrases': phrases
		};
	}
} // end class NPCKnowsChar

export class NPC extends CharNPCBase {
	type: NPCType;
	unknownPhrases: NPCPhrase[];
	knownNPCs: NPCKnowsNPC[];
	knownChars: NPCKnowsChar[];

	constructor(data) {
		super(data);
		this.unknownPhrases = data.unknownPhrases;
		this.type = (data.type || NPCType.Unknown);
		this.knownNPCs = (data.knownNPCs || []);
		this.knownChars = (data.knownChars || []);
	}

	static addNPCKnown(thisNPC: NPC, knownNPC: NPC, knownNPCPhrases: NPCPhrase) {
		const npcKnowsNPC = new NPCKnowsNPC({ 'npc': knownNPC, 'phrases': knownNPCPhrases });
		thisNPC.knownNPCs.push(npcKnowsNPC);
	}

	static addCharKnown(thisNPC: NPC, knownChar: Character, knownCharPhrases: NPCPhrase) {
		const npcKnowsChar = new NPCKnowsChar({ 'char': knownChar, 'phrases': knownCharPhrases });
		thisNPC.knownChars.push(npcKnowsChar);
	}

	docify() {
		const unknownPhrases: string[] = [];
		this.unknownPhrases.forEach(phrase => {
			unknownPhrases.push(phrase.docify());
		});
		const knownNPCs: string[] = [];
		this.knownNPCs.forEach(phrase => {
			knownNPCs.push(phrase.docify());
		});
		const knownChars: string[] = [];
		this.knownChars.forEach(phrase => {
			knownChars.push(phrase.docify());
		});
		const doc = super.docify();
		doc.type = this.type;
		doc.unknwonPhrases = unknownPhrases;
		doc.knownNPCs = knownNPCs;
		doc.knwonChars = knownChars;
		return doc;
	}

} // end class NPC

export class Character extends CharNPCBase {
	player: Player;
	warnings: string[];
	suspended: boolean;
	suspendReason: string;
	timesPlayed: number;
	lastPlayed: Date;

	constructor(data) {
		super(data);
		this.player = data.player;
		this.warnings = (data.warnings || []);
		this.suspended = (data.suspended || false);
		this.suspendReason = (data.suspendReason || '');
		this.timesPlayed = (data.timesPlayed || 0);
		this.lastPlayed = (data.lastPlayed || new Date('1/1/1900'));
		this.warnings = (data.warnings || []);
	}

	docify() {
		const doc = super.docify();
		doc.player = this.player;
		doc.warnings = this.warnings;
		doc.suspended = this.suspended;
		doc.suspendReason = this.suspendReason;
		doc.timesPlayed = this.timesPlayed;
		doc.lastPlayed = this.lastPlayed;
		return doc;
	}

} // end Character
