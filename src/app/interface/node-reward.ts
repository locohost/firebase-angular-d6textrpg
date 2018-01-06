import { NodeRewardHazardBase } from './node-reward-hazard-base';
import { Reward } from './reward';

export interface NodeReward extends NodeRewardHazardBase {
	reward: Reward;
}
