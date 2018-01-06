import { NodeRewardHazardBase } from './node-reward-hazard-base';
import { Hazard } from './hazard';

export interface NodeHazard extends NodeRewardHazardBase {
	hazard: Hazard;
}
