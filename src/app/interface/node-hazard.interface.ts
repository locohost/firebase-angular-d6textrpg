import { NodeRewardHazardBase } from './node-reward-hazard-base.interface';
import { Hazard } from './hazard.interface';

export interface NodeHazard extends NodeRewardHazardBase {
	hazard: Hazard;
}
