import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';


import { SUBSCRIPTION } from '@common/models/models';
import { SubscriptionSchema } from './schema/subscription.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: SUBSCRIPTION.name,
        useFactory: () => SubscriptionSchema
      }
    ]),
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService]
})
export class SubscriptionModule {}
