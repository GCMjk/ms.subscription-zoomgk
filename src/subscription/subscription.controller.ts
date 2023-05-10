import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { SubscriptionMSG } from '@common/constants';
import { SubscriptionService } from './subscription.service';
import { SubscriptionDTO } from './dto/subscription.dto';

@Controller()
export class SubscriptionController {
    constructor(
        private readonly _subscriptionService: SubscriptionService
    ) {}

    @MessagePattern(SubscriptionMSG.CREATE)
    create(@Payload() subscriptionDTO: SubscriptionDTO) {
        return this._subscriptionService.create(subscriptionDTO);
    }

    @MessagePattern(SubscriptionMSG.FIND_ALL)
    findAll() {
        return this._subscriptionService.findAll();
    }

    @MessagePattern(SubscriptionMSG.FIND_ONE)
    findOne(@Payload() id: string) {
        return this._subscriptionService.findOne(id);
    }

    @MessagePattern(SubscriptionMSG.UPDATE)
    update(@Payload() payload: { id: string, subscriptionDTO: SubscriptionDTO }) {
        return this._subscriptionService.update(payload.id, payload.subscriptionDTO);
    }

    @MessagePattern(SubscriptionMSG.DELETE)
    delete(@Payload() id: string) {
        return this._subscriptionService.delete(id);
    }
}
