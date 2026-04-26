import Redis from 'ioredis';


function createRedisConnection(){
    return new Redis({
    host : 'localhost',
    port : 6379
})
}

export const publisher = createRedisConnection();


export const subscriber = createRedisConnection();


export const redis = createRedisConnection(); // It will be used for just read and write in state we lifting the state up.