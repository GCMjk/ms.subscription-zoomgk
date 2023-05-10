export enum RabbitMQ {
    SubscriptionQueue = 'subscriptions'
}

export enum SubscriptionMSG {
    CREATE = 'CREATE_SUBSCRIPTION',
    FIND_ALL = 'FIND_SUBSCRIPTIONS',
    FIND_ONE = 'FIND_SUBSCRIPTION',
    UPDATE = 'UPDATE_SUBSCRIPTION',
    DELETE = 'DELETE_SUBSCRIPTION'
}