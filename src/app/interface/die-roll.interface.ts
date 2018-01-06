export interface DieRoll {
	value: number;
	die: number; // die should normally be 4, 6, 8, 10, 12 or 20
	howMany: number;
	plusMinus: number;
}
