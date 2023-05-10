import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { SUBSCRIPTION } from '@common/models/models';
import { ISubscription } from '@common/interfaces/subscription.interface';
import { SubscriptionDTO } from './dto/subscription.dto';

@Injectable()
export class SubscriptionService {

    constructor(
        @InjectModel(SUBSCRIPTION.name) private readonly model: Model<ISubscription>
    ) {}

    async create (subscriptionDTO: SubscriptionDTO): Promise<ISubscription> {
        const newSubscription = new this.model(subscriptionDTO);

        return await newSubscription.save();
    }

    async findAll (): Promise<ISubscription[]> {
        return await this.model.find();
    }

    async findOne (id: string): Promise<ISubscription> {
        return await this.model.findById(id);
    }

    async update (id: string, subscriptionDTO: SubscriptionDTO): Promise<ISubscription> {
        return await this.model.findByIdAndUpdate(
            id,
            subscriptionDTO,
            { new: true }
        );
    }

    async delete (id: string) {
        await this.model.findByIdAndDelete(id);

        return {
            status: HttpStatus.OK,
            message: 'User deleted successfully'
        }
    }

}