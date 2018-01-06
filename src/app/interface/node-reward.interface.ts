import { NodeRewardHazardBase } from './node-reward-hazard-base.interface';
import { Reward } from './reward.interface';

export interface NodeReward extends NodeRewardHazardBase {
	reward: Reward;
}
