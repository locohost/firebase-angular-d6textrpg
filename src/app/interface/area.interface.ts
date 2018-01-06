import { Base } from './base';
import { Region } from './region';
import { Building } from './building';
import { Node } from './node';
import { AreaType } from '../enum/all.enum';

export interface Area extends Base {
	type: AreaType;
	region: Region;
	buildings: Building[];
	nodes: Node[];
	coverIdx: number;
	elevation: number;
}
