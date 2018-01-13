import { Base } from './base.interface';
import { Region } from './region.interface';
import { Building } from './building.interface';
import { Node } from './node.interface';
import { AreaType } from '../enum/all.enum';

export interface DropDown extends Base {
	type: AreaType;
	region: Region;
	buildings: Building[];
	nodes: Node[];
	coverIdx: number;
	elevation: number;
}
